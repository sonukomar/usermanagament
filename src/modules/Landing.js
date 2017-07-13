import React, { Component } from 'react';
import '../App.css';

class Landing extends Component {
  render() {
    return (
      <div>  
        <div className="row">
            <div className="jumbotron">
                <h1>You landed at Right Place! </h1>
                 <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus officiis quas accusamus quae adipisci architecto,<br /> 
                    eius, perspiciatis unde dolor, <strong>soluta illum magnam repudiandae error nam? Harum aperiam,</strong> quis quisquam illum!<br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore itaque consectetur illo tenetur, possimus, explicabo, voluptas excepturi assumenda temporibus, accusamus provident tempore. Ipsa alias officia, autem est quae accusamus.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>   
                <br /><br />

                <p><a className="btn btn-primary btn-lg" href="#/login" role="button">Learn more</a></p>
                </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <div className="panel panel-success">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi harum minima eaque omnis, officia ab corporis laudantium at aperiam totam esse, error debitis excepturi sed dolorum iste nemo voluptate veritatis.</div>
            </div>
            <div className="col-md-3">
                <div className="panel panel-success">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi harum minima eaque omnis, officia ab corporis laudantium at aperiam totam esse, error debitis excepturi sed dolorum iste nemo voluptate veritatis.</div>
            </div>
            <div className="col-md-3">
                <div className="panel panel-success">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi harum minima eaque omnis, officia ab corporis laudantium at aperiam totam esse, error debitis excepturi sed dolorum iste nemo voluptate veritatis.</div>
            </div>
             <div className="col-md-3">
                <div className="panel panel-success">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi harum minima eaque omnis, officia ab corporis laudantium at aperiam totam esse, error debitis excepturi sed dolorum iste nemo voluptate veritatis.</div>
            </div>
            
        </div>
        <hr />
        <div className="row center-block" id="author">
            <div className="row text-justify">
                <div className="col-xs-6 col-md-3">
                    <a href="/#login" >
                    <img className="img-thumbnail img-responsive" src="/images/sonu.jpg" alt='SampleImage' />
                    </a>
                </div>
                <div className="col-md-9">
                    <p className='headingFont'>About the Author</p>
                        <span>Hello there, I am Sonu Kumar and i am writting this awesome code for react. All this screens are rendred using react. so
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum omnis excepturi aliquid aut, nam, a hic maxime totam blanditiis 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsum velit maxime architecto aperiam sed minus commodi dolores cum tempora! 
                        Ab beatae laudantium aperiam numquam sapiente sunt cum natus magnam.qui officiis nobis consequatur, optio odio harum nemo? Fugit illum, 
                        doloremque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum omnis excepturi aliquid aut, nam, a hic maxime totam blanditiis 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsum velit maxime architecto aperiam sed minus commodi dolores cum tempora! 
                        Ab beatae laudantium aperiam numquam sapiente sunt cum natus magnam.qui officiis nobis consequatur, optio odio harum nemo? Fugit illum, 
                        doloremque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum omnis excepturi aliquid aut, nam, a hic maxime totam blanditiis 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsum velit maxime architecto aperiam sed minus commodi dolores cum tempora! 
                        Ab beatae laudantium aperiam numquam sapiente sunt cum natus magnam.qui officiis nobis consequatur, optio odio harum nemo? Fugit illum, 
                        doloremque.</span>
                        <br /><br /><br />
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                </div>    
            </div>
        </div>
     </div>
    );
  }
}

export default Landing;
