import React from 'react';
// import header
import Header from '../../../../DungChung/Header';

// import file dem so giay phep
import DemGiayPhep from '../DemGiayPhep';

// import table
import { ConfigProvider, Table, Input } from 'antd';

// import map
import { MapContainer } from "react-leaflet";
import { BasemapLayer } from "react-esri-leaflet";
import vnVN from 'antd/lib/locale/vi_VN';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import icon from '../../../../DungChung/marker.png';





let DefaultIcon = L.icon({
    iconUrl: icon,
	iconSize: [15, 15],
    iconAnchor: [10, 15]
});
const { Search } = Input;

L.Marker.prototype.options.icon = DefaultIcon;

export default class CapPhepNuocDuoiDatKhaiThac extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            center: [21.529737201190642, 103.9692398828125],
			zoom: 8,
            loading: false,
            dataSource: [],
            visible: false,
        }

        this.mapRef = React.createRef();
    }

    componentDidMount(){
        document.title = "Khai thác nước dưới đất";
    }

    changeBasemap = (event) => {
        // Change basemap follow select option
        var basemap = event.target.value
        var map = this.mapRef.current;

        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });
    
        var layer = esri.basemapLayer(basemap);
    
        map.addLayer(layer);
    
        if (basemap === 'ShadedRelief'
        || basemap === 'Oceans'
        || basemap === 'Gray'
        ) {
            var layerLabels = esri.basemapLayer(basemap + 'Labels');
            map.addLayer(layerLabels);
        } else if (basemap === 'Imagery') {
            var imagery = esri.basemapLayer('Imagery');
            var imageryLabels = esri.basemapLayer('ImageryLabels');
            map.addLayer(imagery);
            map.addLayer(imageryLabels);
        }

        // Add marker
        var markerStyle = {
            radius: 7,
            fillColor: "yellow",
            color: "yellow",
            weight: 1,
            opacity: 1,
            fillOpacity: 1,
            className: 'marker'
        };

        // Draw circle each point
        L.geoJSON(this.state.contructionInfoForMap, {
        onEachFeature: this.onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, markerStyle);
        }
        }).addTo(map);
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
			<div className="p-0">
                {/* Header */}
                <Header headTitle="QUẢN LÝ CẤP PHÉP KHAI THÁC NƯỚC DƯỚI ĐẤT" previousLink="/tai-nguyen-nuoc/cap-phep" showHeadImage={true} layout48={true} />
                {/* Ket thuc header */}
                <main className="d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-3 px-0 menu-home discharge-water text-center">
                    <DemGiayPhep />
                    </div>
                    <div className="menu-home col-12 p-0 col-lg-9 discharge-water">
                        <div className="col-12 px-md-1 vh-50 position-relative">
                            
                            {/* Map */}
                            <select defaultValue="Imagery" id="switch-basemaps" className="position-absolute" onChange={this.changeBasemap}>
                                <option value="Imagery">Bản đồ vệ tinh</option>
                                <option value="Topographic">Bản đồ địa hình</option>
                                <option value="Streets">Bản đồ đường</option>
                                <option value="NationalGeographic">Bản đồ địa lý</option>
                                <option value="Gray">Bản đồ xám</option>
                            </select>
                            <MapContainer className="col-12 h-100 w-100" whenCreated={ mapInstance => { this.mapRef.current = mapInstance } } center={this.state.center} zoom={this.state.zoom}>
                                <BasemapLayer name="Imagery" />
                                <BasemapLayer name="ImageryLabels" />
                            </MapContainer>
                            {/* Ket tuc map */}

                            <div className="col-12 py-1 row align-items-center">
                                {/* O tm kiem */}
                                <div className="col-lg-4">
                                    <Search allowClear id="search" name="search" placeholder="--Tìm kiếm giấy phép--" onSearch={this.onSearchHandle} />
                                </div>
                                <div className="col-3 p-0">
                                    <select name="filter" id="filter" className="form-select font-13" defaultValue="all">
                                        <option value="all">Tất cả</option>
                                        <option value="conhieuluc">Còn hiệu lực</option>
                                        <option value="chuapheduyet">Chưa phê duyệt</option>
                                        <option value="hethieuluc">Hết hiệu lực</option>
                                        <option value="saphethieuluc">Sắp hết hiệu lực</option>
                                    </select>
                                </div>
                                {/* Ket thuc o tim kiem */}
                                {/* Bang du lieu */}
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
                                {/* Ket thuc bang du lieu */}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
