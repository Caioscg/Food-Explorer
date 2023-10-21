import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${ ({ theme }) => theme.COLORS.DARK_400};
        color: ${ ({ theme }) => theme.COLORS.LIGHT_300};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }
    
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.87);
    }

    .spinner {
        display: block;
        margin: auto;
    }

    .slide-right {
	    -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .scale-up-center {
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @keyframes slide-right {
        0% {
            -webkit-transform: translateX(-150px); opacity: 0;
                    transform: translateX(-150px); opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0); opacity: 1;
                    transform: translateX(0); opacity: 1;
        }
    }

    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

`