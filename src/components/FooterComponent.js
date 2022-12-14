import React from "react";
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2 mt-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/Nhân-Viên">Nhân Viên</Link></li>
                            <li><Link to="Phòng-Ban">Phòng Ban</Link></li>
                            <li><Link to="/Bảng-Lương">Bảng Lương</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5 mt-3">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                            confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 mt-3">
                        <div className="text-center">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto mt-3">
                        <p>© Copyright 2022 Ứng dụng quản lý nhân sự</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;