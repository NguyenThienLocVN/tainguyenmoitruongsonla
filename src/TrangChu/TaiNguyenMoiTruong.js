/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import Header from '../DungChung/Header';
import { trackPromise } from 'react-promise-tracker';
import { LoginOutlined } from '@ant-design/icons';
import configData from "../config.json";

import { getUser, removeUserSession, getToken } from '../DungChung/Auth';
import '../DungChung/Page.css';

export default class Login extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            nameUser: '',
            redirect: false,
        }
    }

    componentDidMount(){
        document.title = "Trang chủ | Giám sát tài nguyên môi trường Sơn La";
    }

    // onLogoutHandler = () => {
    //     trackPromise(
    //     axios
    //         .post(configData.API_URL + "/logout", {
    //             headers: {'Authorization': 'Bearer ' + getToken()}
    //         })
    //         .then((response) => {
    //             if(response.status === 200)
    //             {
    //                 removeUserSession();
    //                 this.setState({redirect: true}); 
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             removeUserSession();
    //             this.setState({redirect: true});  
    //         })
    //     );
    // };

    render(){
        // const user = getUser();
        // if (!user || this.state.redirect) {
        //     return <Redirect to="/login" push={true} />;
        // }
        return(
            <div className="pt-1 px-1">
                <header class="container">
                    <a href="http://tainguyenmoitruongsonla.vn">
                        <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANHSOTNMT.png'} class="w-100" alt="ANHSOTNMT" />
                    </a>
                </header>
                <div className="container d-flex">
                    <div className="col-sm-6 p-0">
                        <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_SONLA.png'} className="w-100" alt="ANH_SONLA" />
                    </div>
                    <div className="col-sm-6 m-0 row link_to_web">
                        <Link to="#" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_DATDAI.png'} alt="ANH_DATDAI" /> 
                            <h4 className="h5">Đất đai</h4>
                        </Link>
                        <Link to="#" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_DIACHAT.png'} alt="ANH_DIACHAT" /> 
                            <h4 className="h5">Địa chất khoáng sản</h4>
                        </Link>
                        <Link to="/tai-nguyen-nuoc" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_TAINGUYENNUOC.png'} alt="ANH_TAINGUYENNUOC" /> 
                            <h4 className="h5">Tài nguyên nước</h4>
                        </Link>
                        <Link to="#" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_KTTV.png'} alt="ANH_KTTV" /> 
                            <h4 className="h5">Khí tượng thủy văn</h4>
                        </Link>
                        <Link to="#" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_BDKH.png'} alt="ANH_BDKH" /> 
                            <h4 className="h5">Biến đổi khí hậu</h4>
                        </Link>
                        <Link to="#" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_MOITRUONG.png'} alt="ANH_MOITRUONG" /> 
                            <h4 className="h5">Môi trường</h4>
                        </Link>
                        <Link to="#" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_VIENTHAM.png'} alt="ANH_VIENTHAM" /> 
                            <h4 className="h5">Viễn thám</h4>
                        </Link>
                        <Link to="#" className="nav-link col-6 text-center text-dark">
                            <img src={process.env['PUBLIC_URL'] + '/TaiNguyenMoiTruong/ANH_DODACBANDO.png'} alt="ANH_DODACBANDO" /> 
                            <h4 className="h5">Đo đạc bản đồ và thông tin địa lý</h4>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}