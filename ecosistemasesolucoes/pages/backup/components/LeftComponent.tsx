import { NextPage } from "next";
import { Row, Col } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import styles from '../index.module.css';

interface Props{
    leftCol: number,
    rightCol: number,
    color: 'bg-info' | 'bg-primary',
    titleContent?: string,
    textContent: string,
    imagePath: string,
    heightClass?: string,
}

const LeftComponent : NextPage<Props> = (props) =>{
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if(spanRef.current){
            spanRef.current.innerHTML = props.textContent
        }
    })

    return (
        <Row style={{
            backgroundImage: `url(${props.imagePath})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            // backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0.12), rgba(30,30,30,0.28))', 
          }} className={`${props.color} ${props.heightClass ? props.heightClass : 'h50v'}`}>

          <Col xs={props.leftCol}>
            <span ref={spanRef}  className={`${props.color == 'bg-info' ? 'bg-primary' : 'bg-info'}  h-100 d-flex flex-column align-items-center text-light px-3 justify-content-center ${styles.borderRightRadius}`}>
              {/* <h3>{props.titleContent}</h3> */}
              {/* {parse(props.textContent)} */}
            </span>
          </Col>

          <Col xs={props.rightCol}>
            <div className={`h-100 d-flex flex-column align-items-center justify-content-center p-1`}>
              {/* <img src={props.imagePath} className='img-fluid rounded'/> */}
            </div>
          </Col>

        </Row>
    )
}

export default LeftComponent;