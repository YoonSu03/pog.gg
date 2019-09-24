import React from 'react';

const AppLayout = ({children}) => {
    return(
        <div>
            <div className="LeagueBackground"></div>
            <nav className="Navigation">
                <div className="container">
                    <a className="Menus__link Gilroy brand" href="#">QWER.GG</a>
                    <a className="Menus__link" href="#">경기 결과</a>
                    <a className="Menus__link" href="#">프로빌드</a>
                    <a className="Menus__link" href="#">경기 일정</a>
                    <a className="Menus__link" href="#">하이라이트</a>
                    <a className="Menus__link" href="#">커뮤니티</a>
                    <span className="Menus__login float-right">
                        <span>로그인</span>
                    </span>
                </div>
            </nav>
            {children}
            <style global jsx>
                {`
                    .LeagueBackground {
                        position: absolute; 
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        position: fixed;
                        background-repeat: no-repeat;
                        backgroundImage:url(/static/lck_background.png);
                        background-size: 50%;
                        background-position: 50%;
                        opacity: .3;
                        pointer-events: none;
                    }
                    .Navigation {
                        clear: both;
                        height: 3.75rem;
                        line-height: 3.75rem;
                        background-color: #27282d;
                        color: #fff;
                        position: sticky;
                        top: 0;
                        z-index: 10;
                        border-bottom: 1px solid #2a2b30;
                    }
                    .container {
                        color: #fbfbfb;
                        max-width: 1140px;
                        width: 100%;
                        padding-right: 15px;
                        padding-left: 15px;
                        margin-right: auto;
                        margin-left: auto;
                    }
                    .Menus__link {
                        font-size: 1px;
                        font-size: 1rem;
                        margin-right: 1.6rem;
                        user-select: none;
                        position: relative;
                    }
                    .Menus__link.brand {
                        font-size: 1.875rem;
                        font-family: Gilroy;
                        color: #db0442;
                        margin-right: 4rem;
                    }
                    .Menus__link:not(.brand) {
                        top: -.25rem;
                        position: relative;
                        color: #fbfbfb;
                    }
                    .Menus__login {
                        font-size: .75px;
                        font-size: .75rem;
                        padding-left: 1.25rem;
                        padding-right: 1.25rem;
                        cursor: pointer;
                        margin-top: .875rem;
                        height: 2rem;
                        line-height: normal;
                        border: 1px solid #01d1b2;
                        color: #01d1b2;
                        padding-top: .4rem;
                    }
                    .Menus__login:hover {
                        -webkit-animation:login   0.3s ease 1;
                        -webkit-animation-fill-mode:both
                    }
                    @-webkit-keyframes login{
                        100%{
                            border-color: #16776A;
                            color:  #16776A;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default AppLayout;