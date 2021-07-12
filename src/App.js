import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './DungChung/Register';
import Login from './DungChung/Login';

// Authenticated login
import ProtectedRoute from './DungChung/protectedRoute'

// Trang chu tai nguyen moi truong
import Home from './TrangChu/TaiNguyenMoiTruong';

// Trang chu tai nguyen nuoc
import TrangChuTaiNguyenNuoc from './TaiNguyenNuoc/TrangChu/TaiNguyenNuoc';

// Trang gioi thieu chung
import GioiThieuChung from './TaiNguyenNuoc/01_GioiThieuChung/TrangChu/GioiThieuChung';

// Trang quan ly cap phep
import QuanLyCapPhep from './TaiNguyenNuoc/04_QuanLyCapPhep/TrangChu/QuanLyCapPhep';

// Trang quan ly cap phep nuoc duoi dat - khai thac
import CapPhepNuocDuoiDatKhaiThac from './TaiNguyenNuoc/04_QuanLyCapPhep/02_KhaiThacNuocDuoiDat/01_KhaiThac/KhaiThac';

// Trang quan ly cap phep nuoc duoi dat - tham do
import CapPhepNuocDuoiDatThamDo from './TaiNguyenNuoc/04_QuanLyCapPhep/TrangChu/QuanLyCapPhep';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />

        		{/* Trang chu tai nguyen moi truong */}
				<Route exact path="/" component={Home} />

				{/* Trang chu tai nguyen nuoc */}
				<Route exact path="/tai-nguyen-nuoc" component={TrangChuTaiNguyenNuoc} />

				{/* Gioi thieu chung */}
				<Route exact path="/tai-nguyen-nuoc/gioi-thieu-chung" component={GioiThieuChung} />

        		{/* Quan ly cap phep */}
				<Route exact path="/tai-nguyen-nuoc/cap-phep" component={QuanLyCapPhep} />

				{/* Quan ly cap phep nuoc duoi dat - khai thac */}
				<Route exact path="/tai-nguyen-nuoc/cap-phep/nuoc-duoi-dat/khai-thac" component={CapPhepNuocDuoiDatKhaiThac} />

			</Switch>
		</BrowserRouter>
  );
}

export default App;
