export default function headerShrink(){
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
            document.querySelector(".header-info").style.padding = "0px 5% 0 0";
            document.querySelector(".header-info").style.background = 'rgb(28, 29, 28)';
            document.querySelector(".logo_name").style.boxShadow = 'inset 0 0 20px 0 rgba(0, 0, 0, 1)';
            document.querySelector(".logo_name").style.fontSize = '40px';
            document.querySelector(".logo_name").style.height = '100%';
            document.querySelector(".logo_name").style.borderBottom = 'none';
            document.querySelector(".logo_name").style.webkitTextStroke = '1px white';
            document.querySelector(".logo_name").style.fontFamily = "'Steelfish Rg',\ 'helvetica neue',\
            helvetica, arial, sans-serif";
            document.querySelector(".logo_name").style.color = 'black';
            document.querySelector(".logo_name").style.background = 'url(https://hromady.org/wp-content/uploads/2020/11/c2b2757203f9b9e1b86986aad502d2d5-1.jpg)';
            document.querySelector(".logo_name").style.backgroundPosition = 'center';
            document.querySelector(".logo_name").style.webkitBackgroundClip = 'border-box';
            document.querySelector(".logo_name").style.webkitTextFillColor = 'currentcolor';
            document.querySelector(".logo_name").style.lineHeight = '2.4';
            document.querySelector(".logo_name").style.width = '220px';
            document.querySelector(".logo_name").style.whiteSpace = 'pre-line';
            document.querySelector(".logo_name").style.opacity = 0;
            setTimeout(()=>{
                document.querySelector(".logo_name").style.opacity = 1;
            }, 1);
            document.querySelector(".logo_img").style.maxWidth = 'none';
            document.querySelector(".logo_img").style.maxHeight = '100px';
            document.querySelector(".logo_img").style.borderRadius = '0';
            document.querySelector(".logo_name").style.marginLeft =  '0px';
            document.querySelector(".logo_name").textContent = 'Sorting';
        } else {
            document.querySelector(".logo_name").style.lineHeight = 'normal';
            document.querySelector(".logo_name").textContent = 'array sorting';
            document.querySelector(".logo_name").style.marginLeft = '20px';
            document.querySelector(".logo_img").style.borderRadius = '10px';
            document.querySelector(".logo_img").style.maxWidth = '80px';
            document.querySelector(".logo_img").style.maxHeight = 'none';
            document.querySelector(".logo_name").style.whiteSpace = 'normal';
            document.querySelector(".logo_name").style.width = 'auto';
            document.querySelector(".logo_name").style.height = 'auto';
            document.querySelector(".header-info").style.padding = "20px 5%";
            document.querySelector(".header-info").style.background = 'rgba(28, 29, 28, 0.5)';
            document.querySelector(".logo_name").style.fontSize = '50px';
            document.querySelector(".logo_name").style.boxShadow = 'none';
            document.querySelector(".logo_name").style.borderRadius = '0px';
            document.querySelector(".logo_name").style.backgroundImage = 'url(https://hromady.org/wp-content/uploads/2020/11/c2b2757203f9b9e1b86986aad502d2d5-1.jpg)';
            document.querySelector(".logo_name").style.webkitBackgroundClip = 'text';
            document.querySelector(".logo_name").style.webkitTextFillColor = 'transparent';
            document.querySelector(".logo_name").style.backgroundRepeat = 'repeat';
            document.querySelector(".logo_name").style.webkitTextStroke = '0.5px black';
            document.querySelector(".logo_name").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
            document.querySelector(".logo_name").style.borderBottom = 'solid 1px white';
        }
    }
}