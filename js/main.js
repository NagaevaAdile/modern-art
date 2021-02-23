if (screen.width > 1300) {
    window.onscroll = function () {
        scrollFunction();
        scrollFunction2();
        scrollFunction3();
        scrollFunction4();
        scrollFunction5();
        scrollFunction6();
    };

    function scrollFunction() {
        let imgAD = document.querySelector(".painter__imgAD");
        if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4200) {
            imgAD.style.width = '60%';
            imgAD.style.height = 'auto';
            imgAD.style.marginLeft = '100px';
        } else {
            imgAD.style.width = '100%';
            imgAD.style.height = 'auto';
            imgAD.style.marginLeft = '0';
        }
    }

    function scrollFunction2() {
        let imgK = document.querySelector(".kand__img");
        if (document.body.scrollTop > 8100 || document.documentElement.scrollTop > 7900) {
            imgK.style.width = '70%';
            imgK.style.height = 'auto';
            imgK.style.marginLeft = '100px'
        } else {
            imgK.style.width = '100%';
            imgK.style.height = 'auto';
            imgK.style.marginLeft = '0'
        }
    }

    function scrollFunction3() {
        let imgS = document.querySelector(".squre__img");
        if (document.body.scrollTop > 10000 || document.documentElement.scrollTop > 9500) {
            imgS.style.width = '70%';
            imgS.style.height = 'auto';
            imgS.style.marginLeft = '100px'
        } else {
            imgS.style.width = '100%';
            imgS.style.height = 'auto';
            imgS.style.marginLeft = '0'
        }
    }

    function scrollFunction4() {
        let imgP = document.querySelector(".piss__img");
        if (document.body.scrollTop > 14000 || document.documentElement.scrollTop > 13500) {
            imgP.style.width = '70%';
            imgP.style.height = 'auto';
            imgP.style.marginLeft = '100px'
        } else {
            imgP.style.width = '90%';
            imgP.style.height = 'auto';
            imgP.style.marginLeft = '0'
        }
    }

    function scrollFunction5() {
        let imgB = document.querySelector(".box__img");
        if (document.body.scrollTop > 16000 || document.documentElement.scrollTop > 15000) {
            imgB.style.width = '70%';
            imgB.style.height = 'auto';
            imgB.style.marginLeft = '100px'
        } else {
            imgB.style.width = '90%';
            imgB.style.height = 'auto';
            imgB.style.marginLeft = '0'
        }
    }

    function scrollFunction6() {
        let imgA = document.querySelector(".akula__img");
        if (document.body.scrollTop > 19800 || document.documentElement.scrollTop > 18800) {
            imgA.style.width = '90%';
            imgA.style.height = 'auto';
            imgA.style.marginLeft = '100px'
        } else {
            imgA.style.width = '110%';
            imgA.style.height = 'auto';
            imgA.style.marginLeft = '-100px'
        }
    }
}