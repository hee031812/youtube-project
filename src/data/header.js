import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { RxLinkNone2 } from "react-icons/rx";
import { RiHomeHeartLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";




export const menuText = [
    {
        title: "여행 유튜버 홈",
        icon: <RiHomeHeartLine />,
        src: "/"
    }, {
        title: "오늘의 추천픽",
        icon: <FaRegThumbsUp />,
        src: "/today"
    }, {
        title: "유명 유튜버 모음",
        icon: <FaYoutube />,
        src: "/traveler"
    }
]

export const keywordText = [
    {
        title: "빠니보틀",
        icon: <RxLinkNone2 />,
        src: "/search/빠니보틀",
    }, {
        title: "곽튜브",
        icon: <RxLinkNone2 />,
        src: "/search/곽튜브",
    }, {
        title: "시수기릿",
        icon: <RxLinkNone2 />,
        src: "/search/시수기릿",
    }, {
        title: "joe튜브",
        icon: <RxLinkNone2 />,
        src: "/search/joe튜브",
    }, {
        title: "쏘이",
        icon: <RxLinkNone2 />,
        src: "/search/쏘이",
    }, {
        title: "둥지언니",
        icon: <RxLinkNone2 />,
        src: "/search/둥지언니",
    }, {
        title: "채코제",
        icon: <RxLinkNone2 />,
        src: "/search/채코제",
    }, {
        title: "여행가 제이",
        icon: <RxLinkNone2 />,
        src: "/search/여행가 제이",
    }, {
        title: "원지의 하루",
        icon: <RxLinkNone2 />,
        src: "/search/원지의 하루",
    }, {
        title: "캐럿맨여행기",
        icon: <RxLinkNone2 />,
        src: "/search/캐럿맨여행기",
    },
]

export const snsText = [
    {
        title: "gitub",
        src: "https://hee031812.github.io/webs2024/",
        icon: <AiFillGithub />
    }, {
        title: "gitub",
        src: "https://hee031812.github.io/webs2024/",
        icon: <AiOutlineInstagram />
    }, {
        title: "gitub",
        src: "https://hee031812.github.io/webs2024/",
        icon: <SiNaver />
    }
]