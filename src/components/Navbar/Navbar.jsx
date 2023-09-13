import './Navbar.scss'
import {  NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll'


export const Navbar = () => {

    const [active, setActive] = useState(false)
    const refOne = useRef(null)

    const navigate = useNavigate()


    const handleClickOutside = (e) => {

        if (active) {
            console.log("says active")
            if (!refOne.current.contains(e.target)) {
                console.log(refOne.current)
                console.log("hello")
                setActive(false)
            }
        } else console.log("not active")

    }

    const clickFurther = () => {
        
    }
    // const scrollHandler = (elemRef) => {
    //     window.scrollTo({top: elemRef.current.offsetTop, behavior: "smooth"})
    //     console.log(elemRef);
    // }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        console.log("Useffect")

        return (() => {
            document.addEventListener('click', handleClickOutside)
            console.log("Useffect2")
        })
    })
    return (
        <header className='header' id='header' ref={refOne}>
            <div className="container h-100 align-center d-flex justify-between">
                <NavLink to="/" className='header__logo'>
                    <svg width="143" height="40" viewBox="0 0 143 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9999 39.9999C31.0456 39.9999 39.9999 31.0456 39.9999 19.9999C39.9999 8.95418 31.0456 -0.00012207 19.9999 -0.00012207C8.95424 -0.00012207 -6.10352e-05 8.95418 -6.10352e-05 19.9999C-6.10352e-05 31.0456 8.95424 39.9999 19.9999 39.9999Z" fill="white" fill-opacity="0.1" />
                        <path d="M26.9984 12L26.8892 12.3711V23.1393L26.9984 23.2483L31.9968 20.2937L26.9984 12Z" fill="white" />
                        <path d="M26.9985 12L22 20.2937L26.9985 23.2483V18.0217V12Z" fill="white" />
                        <path d="M26.9986 24.8744L26.9371 24.9494V28.7852L26.9986 28.9649L32.0001 21.9213L26.9986 24.8744Z" fill="white" />
                        <path d="M26.9985 28.965V24.8744L22 21.9213L26.9985 28.965Z" fill="white" />
                        <path d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z" fill="white" />
                        <path d="M22 20.2937L26.9984 23.2482V18.0217L22 20.2937Z" fill="white" />
                        <path d="M11.043 12.7812V27H8.35742V12.7812H11.043ZM19.5781 12.7812L13.875 19.7148L10.6133 23.2012L10.1348 20.5938L12.4004 17.6543L16.2871 12.7812H19.5781ZM16.5898 27L12.166 20.3398L14.0898 18.6016L19.7832 27H16.5898Z" fill="white" />
                        <path d="M66.3271 24.1016V26H57.3447V24.1016H66.3271ZM66.1602 14.6182L58.3379 26H56.6768V24.5498L64.5342 13.2031H66.1602V14.6182ZM65.2988 13.2031V15.1104H56.7031V13.2031H65.2988ZM75.9593 13.2031H78.3763V21.7021C78.3763 22.6807 78.1653 23.5039 77.7434 24.1719C77.3216 24.834 76.7473 25.335 76.0208 25.6748C75.2942 26.0088 74.468 26.1758 73.5423 26.1758C72.6048 26.1758 71.7698 26.0088 71.0374 25.6748C70.305 25.335 69.7307 24.834 69.3147 24.1719C68.8987 23.5039 68.6907 22.6807 68.6907 21.7021V13.2031H71.1077V21.7021C71.1077 22.2998 71.2073 22.7891 71.4065 23.1699C71.6057 23.5449 71.887 23.8232 72.2503 24.0049C72.6136 24.1865 73.0442 24.2773 73.5423 24.2773C74.0462 24.2773 74.4768 24.1865 74.8343 24.0049C75.1975 23.8232 75.4759 23.5449 75.6692 23.1699C75.8626 22.7891 75.9593 22.2998 75.9593 21.7021V13.2031ZM85.2134 26H82.4537L82.4713 24.1016H85.2134C85.9576 24.1016 86.5816 23.9375 87.0855 23.6094C87.5894 23.2754 87.9703 22.7979 88.2281 22.1768C88.4859 21.5498 88.6148 20.7998 88.6148 19.9268V19.2676C88.6148 18.5938 88.5416 17.999 88.3951 17.4834C88.2486 16.9678 88.0318 16.5342 87.7447 16.1826C87.4634 15.8311 87.1148 15.5645 86.6988 15.3828C86.2828 15.2012 85.8052 15.1104 85.2662 15.1104H82.4009V13.2031H85.2662C86.1216 13.2031 86.9009 13.3467 87.6041 13.6338C88.313 13.9209 88.9254 14.334 89.441 14.873C89.9625 15.4062 90.3609 16.0449 90.6363 16.7891C90.9175 17.5332 91.0582 18.3652 91.0582 19.2852V19.9268C91.0582 20.8408 90.9175 21.6729 90.6363 22.4229C90.3609 23.167 89.9625 23.8057 89.441 24.3389C88.9254 24.8721 88.3101 25.2822 87.5953 25.5693C86.8804 25.8564 86.0865 26 85.2134 26ZM83.8072 13.2031V26H81.3902V13.2031H83.8072ZM96.41 13.2031V26H93.993V13.2031H96.41ZM107.861 24.1016V26H101.428V24.1016H107.861ZM102.157 13.2031V26H99.7404V13.2031H102.157ZM119.981 19.2764V19.9355C119.981 20.9023 119.852 21.7725 119.594 22.5459C119.336 23.3135 118.97 23.9668 118.496 24.5059C118.021 25.0449 117.455 25.458 116.799 25.7451C116.143 26.0322 115.413 26.1758 114.611 26.1758C113.82 26.1758 113.093 26.0322 112.431 25.7451C111.775 25.458 111.206 25.0449 110.726 24.5059C110.246 23.9668 109.873 23.3135 109.61 22.5459C109.346 21.7725 109.214 20.9023 109.214 19.9355V19.2764C109.214 18.3037 109.346 17.4336 109.61 16.666C109.873 15.8984 110.243 15.2451 110.717 14.7061C111.192 14.1611 111.757 13.7451 112.413 13.458C113.076 13.1709 113.802 13.0273 114.593 13.0273C115.396 13.0273 116.125 13.1709 116.782 13.458C117.438 13.7451 118.003 14.1611 118.478 14.7061C118.958 15.2451 119.328 15.8984 119.585 16.666C119.849 17.4336 119.981 18.3037 119.981 19.2764ZM117.537 19.9355V19.2588C117.537 18.5615 117.473 17.9492 117.344 17.4219C117.215 16.8887 117.025 16.4404 116.773 16.0771C116.521 15.7139 116.21 15.4414 115.841 15.2598C115.472 15.0723 115.056 14.9785 114.593 14.9785C114.124 14.9785 113.708 15.0723 113.345 15.2598C112.988 15.4414 112.683 15.7139 112.431 16.0771C112.179 16.4404 111.986 16.8887 111.851 17.4219C111.722 17.9492 111.658 18.5615 111.658 19.2588V19.9355C111.658 20.627 111.722 21.2393 111.851 21.7725C111.986 22.3057 112.179 22.7568 112.431 23.126C112.689 23.4893 112.999 23.7646 113.363 23.9521C113.726 24.1396 114.142 24.2334 114.611 24.2334C115.079 24.2334 115.496 24.1396 115.859 23.9521C116.222 23.7646 116.527 23.4893 116.773 23.126C117.025 22.7568 117.215 22.3057 117.344 21.7725C117.473 21.2393 117.537 20.627 117.537 19.9355ZM125.166 13.2031V26H122.749V13.2031H125.166ZM130.325 18.7314V20.6387H124.533V18.7314H130.325ZM131.002 13.2031V15.1104H124.533V13.2031H131.002ZM135.782 13.2031V26H133.365V13.2031H135.782ZM140.941 18.7314V20.6387H135.149V18.7314H140.941ZM141.618 13.2031V15.1104H135.149V13.2031H141.618Z" fill="white" />
                    </svg>

                </NavLink>

                <div className="header__nav align-center d-flex justify-between">
                    <Link className="header__link" to='/#self'>О себе</Link>
                    <Link className="header__link" to='/#cons'>Консультации</Link>
                    <Link className="header__link" to='/#edu'>Обучение</Link>
                    <NavLink className="header__link" to='/club' smooth ><button className='header__btn'>Закрытый Клуб</button></NavLink>
                </div>

               
                <div className="header__formobile d-flex justify-between align-center">   
                <NavLink className="header__link header__link2" to='/club'><button className='header__btn'>Закрытый Клуб</button></NavLink>
                    <div className={'header__burger  justify-between burger ' + (active ? "active" : "")}>
                 
                        <div className='burger__divforabsolute'>
                            <div onClick={() => { setActive(prev => !prev) }} className="burger__click"></div>
                        </div>

                    </div>
                </div>


            </div>

            {active &&

                <div className='burger__menu'>
                    <nav className="burger__nav d-flex flex-column align-center justify-between">

                        <NavLink onClick={() => { setActive(prev => !prev); console.log("clicked") }} className="header__link" to='/'>О себе</NavLink>
                        <NavLink onClick={() => { setActive(prev => !prev) }} className="header__link" to='/'>Консультации</NavLink>
                        <NavLink onClick={() => { setActive(prev => !prev) }} className="header__link" to='/'>Обучение</NavLink>
                        <NavLink onClick={() => { setActive(prev => !prev) }} className="header__link" to='/'>Консультации</NavLink>
                        <NavLink onClick={() => { setActive(prev => !prev) }} className="header__link" to='/club'><button className='header__btn'>Закрытый Клуб</button></NavLink>
                    </nav>
                </div>}

        </header>
    );
};