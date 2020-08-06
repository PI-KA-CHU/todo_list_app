import React from 'react'
import Item from '../components/item/item'
import { Input } from 'antd';
import { List } from 'antd';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { getTodos, delTodo, postTodo } from '../axiosUtil'
import { connect } from 'react-redux'
import { deleteItemAction, updateItemAction } from '../action/';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

class ShowItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    addItem = (value) => {
        postTodo(value).then(response => {
            this.addItem(value)
        })
    }

    handleChange = (index) => {
        this.updateItem(index)
    }

    deleteItem = (id) => {
        delTodo(id).then(() => { this.deleteItem(id) })

    }

    componentWillMount() {
        getTodos().then(data => {
            this.items = data;
            this.addItem(data);
        })
    }

    handleDonePage = () => {
        getTodos().then(data => {
            data.filer(item =>item.status === true)
        })
    }

    render() {
        return (
            <div>
                <Layout className="layout" style={{ margin: '1% 35%' }}>
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">
                                <label onClick={this.handleIndexPage}>首页</label>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <label onClick={this.handleDonePage}>完成页</label>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div>
                            <Search type="text"
                                placeholder="input todo event"
                                enterButton="Add" onSearch={(value) => this.addItem(value)}
                                style={{ width: 400 }}
                            />
                        </div>
                        <div className="site-layout-content">
                            <List
                                style={{
                                    width: 400,
                                }}
                                itemLayout="vertical"
                                dataSource={this.items}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta />
                                        <Item key={item.id}
                                            status={item.status}
                                            item={item}
                                            content={item.content}
                                            index={item.id}
                                            deleteItem={this.deleteItem}
                                            updateItem={this.handleChange}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>TODO list</Footer>
                </Layout>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return { items: state.items }
}
const mapDispatchToProps = (
    deleteItemAction(),
    updateItemAction()
)

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem)


