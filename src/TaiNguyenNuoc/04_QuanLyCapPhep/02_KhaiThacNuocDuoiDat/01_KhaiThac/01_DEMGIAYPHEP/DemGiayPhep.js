import React from 'react';
import { Link } from 'react-router-dom';

export default class QuanLyCapPhepCapMoiGiayPhepKTNDD extends React.Component {
    render(){
        return(
            <div className="col-12 px-2 pb-4">
                <div className="col-10 py-2 m-auto row m-0 justify-content-center text-center">
                        <div className="col-12 text-center p-0">
                            <p className="fw-bold font-20 text-primary col-sm-12 mb-1">Tổng số công trình <br /> khai thác nước dưới đất </p>
                        </div>
                        <div className="col-6 text-center p-0">
                            <p className="font-30 m-0 fw-bold">80</p>
                        </div>
                        <div className="col-6 text-center p-0">
                            <img src={process.env.PUBLIC_URL + '/TaiNguyenNuoc/CapPhep/NuocDuoiDat/khai-thac-nuoc-duoi-dat.png'} className="p-0 hydroelectric-icon border border-secondary my-auto mx-3" alt="dap-thuy-dien" />
                        </div>
                    </div>

                    <div className="col-12 py-1 mt-4 d-flex justify-content-center text-center border-top border-bottom">
                        <div className="col-9 text-start p-0">
                            <p className="fw-bold m-0">Tổng số công trình (TSCT)  đã vận hành</p>
                            <p className="font-18 m-0 fw-bold text-danger">80 / 80</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/TaiNguyenNuoc/CapPhep/NuocDuoiDat/khai-thac-nuoc-duoi-dat.png'} className="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="dap-thuy-dien" />
                    </div>
                    <div className="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                        <div className="col-9 text-start p-0">
                            <p className="fw-bold m-0">Giấy phép đã cấp</p>
                            <p className="font-18 m-0 fw-bold text-danger">75 / 80</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/TaiNguyenNuoc/CapPhep/NuocDuoiDat/giay-phep-da-cap.png'} className="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="giay-phep" />
                    </div>
                    <div className="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                        <div className="col-9 text-start p-0">
                            <p className="fw-bold m-0">Giấy phép sắp hết hiệu lực</p>
                            <p className="font-18 m-0 fw-bold text-danger">5 / 80</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/TaiNguyenNuoc/CapPhep/NuocDuoiDat/giay-phep-sap-het-hieu-luc.png'} className="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="giay-phep-2" />
                    </div>
                    <div className="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                        <div className="col-9 text-start p-0">
                            <p className="fw-bold m-0">Giấy phép hết hiệu lực</p>
                            <p className="font-18 m-0 fw-bold text-danger">3 / 80</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/TaiNguyenNuoc/CapPhep/NuocDuoiDat/giay-phep-het-han.png'} className="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="giay-phep-3" />
                    </div>
                    <div className="col-12 py-1 d-flex justify-content-center text-center border-bottom">
                        <div className="col-9 text-start p-0">
                            <p className="fw-bold m-0">Chưa có giấy phép</p>
                            <p className="font-18 m-0 fw-bold text-danger"> 2 / 80</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/TaiNguyenNuoc/CapPhep/NuocDuoiDat/chua-co-giay-phep.png'} className="p-0 hydroelectric-sub-icon border-secondary my-auto mx-3" alt="het-han" />
                    </div>

                    
                    <Link to="/quan-ly-cap-phep/nuoc-duoi-dat/khai-thac/cap-moi" style={{backgroundColor: "rgb(0 152 208)"}} className="col-11 btn d-flex align-items-center mx-auto mt-3 fw-bold">Cấp mới giấy phép</Link>
                    <Link to="/quan-ly-cap-phep/nuoc-duoi-dat/khai-thac/quan-ly-cap-moi" style={{backgroundColor: "#1EC0D7"}} className="col-11 btn d-flex align-items-center mx-auto mt-3 fw-bold">Quản lý cấp phép</Link>
                    <Link to="/quan-ly-cap-phep/nuoc-duoi-dat/khai-thac/gia-han" style={{backgroundColor: "#41A59F"}} className="col-11 btn d-flex align-items-center mx-auto mt-3 fw-bold">Gia hạn giấy phép</Link>
                    <Link to="/quan-ly-cap-phep/nuoc-duoi-dat/khai-thac/dieu-chinh" style={{backgroundColor: "#C5E287"}} className="col-11 btn d-flex align-items-center mx-auto mt-3 fw-bold">Điều chỉnh giấy phép</Link>
                    <Link to="#" style={{backgroundColor: "#E2D987"}} className="col-11 btn d-flex align-items-center mx-auto mt-3 fw-bold">Hướng dẫn sử dụng</Link>
                </div>
        )
    }
}