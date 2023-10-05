// Posts.js
import React from "react";
// import Post2 from "./Post2";
// import Post3 from "./Post3";
// import Post4 from "./Post4";
// import Post1 from "./Post1";
import { Link } from "react-router-dom";
import "./Post.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Blog = () => {
  return (
    <>
    <Container className="padding-top-4" fluid>
        <Row className="align-items-start" style={{ width: "85%", margin: "auto" }}>
    

    
                <div class="col-lg-8 m-15px-tb">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title="" alt=""/>
                                    </Link>
                                </div>
                                <div class="blog-info">
                                    <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <Link to="#" class="px-btn-arrow">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/D3D3D3/000000" title="" alt=""/>
                                    </Link>
                                </div>
                                <div class="blog-info">
                                    <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <Link to="#" class="px-btn-arrow">
                                            <span>Read More</span> 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/87CEFA/000000" title="" alt=""/>
                                    </Link>
                                </div>
                                <div class="blog-info">
                                    <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <Link to="#" class="px-btn-arrow">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/D3D3D3/000000" title="" alt=""/>
                                    </Link>
                                </div>
                                <div class="blog-info">
                                    <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <Link to="#" class="px-btn-arrow">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/E0FFFF/000000" title="" alt=""/>
                                    </Link>
                                </div>
                                <div class="blog-info">
                                    <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <Link href="#" class="px-btn-arrow">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <div class="date">
                                        <span>04</span>
                                        <label>FEB</label>
                                    </div>
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/FFF0F5/000000" title="" alt=""/>
                                    </Link>
                                </div>
                                <div class="blog-info">
                                    <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="btn-bar">
                                        <Link to="#" class="px-btn-arrow">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <Link class="page-link" to="#" tabindex="-1"><i class="fas fa-chevron-left"></i></Link>
                                </li>
                                <li class="page-item active"><Link class="page-link" to="#">1</Link></li>
                                <li class="page-item">
                                    <Link class="page-link" to="#">2 <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                                <li class="page-item">
                                    <Link class="page-link" to="#"><i class="fas fa-chevron-right"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 m-15px-tb blog-aside">

                    {/* <!-- Latest Post --> */}
                    <div class="widget widget-latest-post">
                        <div class="widget-title">
                            <h3>Latest Post</h3>
                        </div>
                        <div class="widget-body">
                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <Link class="name" to="#">
                                            Rachel Roth
                                        </Link>
                                        <Link class="date" to="#">
                                            26 FEB 2020
                                        </Link>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/E6E6FA/000000" title="" alt=""/>
                                    </Link>
                                </div>
                            </div>

                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <Link class="name" to="#">
                                            Rachel Roth
                                        </Link>
                                        <Link class="date" to="#">
                                            26 FEB 2020
                                        </Link>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/FFA07A/000000" title="" alt=""/>
                                    </Link>
                                </div>
                            </div>

                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><Link to="#">Prevent 75% of visitors from google analytics</Link></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <Link class="name" to="#">
                                            Rachel Roth
                                        </Link>
                                        <Link class="date" to="#">
                                            26 FEB 2020
                                        </Link>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <Link to="#">
                                        <img src="https://www.bootdey.com/image/400x200/FFF0F5/000000" title="" alt=""/>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="widget widget-tags">
                        <div class="widget-title">
                            <h3>Latest Tags</h3>
                        </div>
                        <div class="widget-body">
                            <div class="nav tag-cloud">
                                <Link to="#">Design</Link>
                                <Link to="#">Development</Link>
                                <Link to="#">TrLnikvel</Link>
                                <Link to="#">Marketing</Link>
                                <Link to="#">Research</Link>
                                <Link to="#">Managment</Link>
                            </div>
                        </div>
                    </div>
                 {/* <!-- End widget Tags --> */}
                </div>
        </Row>
    </Container>
    </>
  );
};

export default Blog;
