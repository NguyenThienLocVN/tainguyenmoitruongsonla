import React from 'react';

// import table
import { ConfigProvider, Table } from 'antd';

import vnVN from 'antd/lib/locale/vi_VN';

export default class DanhSach extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            loading: false,
            dataSource: [],
        }
    }

    componentDidMount(){
        document.title = "Khai thác nước dưới đất";
    }

    render(){        
        const columns = [
            {
              title: '#',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'Số GP',
              dataIndex: 'gp_sogiayphep',
              key: 'gp_sogiayphep',
              width: '10%',
            },
            {
              title: 'Ngày ký',
              dataIndex: 'gp_ngayky',
              key: 'gp_ngayky',
            },
            {
                title: 'Tên công trình',
                dataIndex: 'congtrinh_ten',
                key: 'congtrinh_ten',
                width: '30%',
            },
            {
                title: 'Tổ chức được cấp phép',
                dataIndex: 'chugiayphep_ten',
                key: 'chugiayphep_ten',
            },
            {
                title: 'Ngày có hiệu lực',
                dataIndex: 'gp_ngaybatdau',
                key: 'gp_ngaybatdau',
            },
            {
                title: 'Thời hạn',
                dataIndex: 'gp_thoihangiayphep',
                key: 'gp_thoihangiayphep',
            },
            {
                title: 'Trạng thái',
                dataIndex: 'hieulucgiayphep',
                key: 'hieulucgiayphep',
            },
            {
                title: 'Thao tác',
                key: 'action',
            },
        ];

        return(
			<>
                <div className="table-responsive">
                    <ConfigProvider locale={vnVN}>
                        <Table  className="table table-sm table-bordered col-12 table-hover text-center" 
                            columns={columns} 
                            loading={this.state.loading}
                            onChange={() => this.handleTableChange}
                            dataSource={this.state.dataSource}
                            rowKey="id" 
                            pagination={{
                            showTotal: (total, range) => `Tất cả ${total} bản ghi`,
                                current: this.state.currentPage,
                                pageSize: 10}}/>
                    </ConfigProvider>
                </div>
            </>
        )
    }
}
