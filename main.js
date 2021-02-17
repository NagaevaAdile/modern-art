if (screen.width > 1400) {
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
        if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4500) {
            imgAD.style.width = '858px';
            imgAD.style.height = '888px';
            imgAD.style.marginLeft = '100px';
        } else {
            imgAD.style.width = '1430px';
            imgAD.style.height = '1481px';
            imgAD.style.marginLeft = '0';
        }
    }

    function scrollFunction2() {
        let imgK = document.querySelector(".kand__img");
        if (document.body.scrollTop > 8100 || document.documentElement.scrollTop > 7900) {
            imgK.style.width = '1101px';
            imgK.style.height = '877px';
            imgK.style.marginLeft = '100px'
        } else {
            imgK.style.width = '1530px';
            imgK.style.height = '1209px';
            imgK.style.marginLeft = '0'
        }
    }

    function scrollFunction3() {
        let imgS = document.querySelector(".squre__img");
        if (document.body.scrollTop > 10000 || document.documentElement.scrollTop > 9500) {
            imgS.style.width = '900px';
            imgS.style.height = '902px';
            imgS.style.marginLeft = '100px'
        } else {
            imgS.style.width = '1500px';
            imgS.style.height = '1503px';
            imgS.style.marginLeft = '0'
        }
    }

    function scrollFunction4() {
        let imgP = document.querySelector(".piss__img");
        if (document.body.scrollTop > 14000 || document.documentElement.scrollTop > 13500) {
            imgP.style.width = '912px';
            imgP.style.height = '961px';
            imgP.style.marginLeft = '100px'
        } else {
            imgP.style.width = '1520px';
            imgP.style.height = '1603px';
            imgP.style.marginLeft = '0'
        }
    }

    function scrollFunction5() {
        let imgB = document.querySelector(".box__img");
        if (document.body.scrollTop > 16000 || document.documentElement.scrollTop > 15000) {
            imgB.style.width = '978px';
            imgB.style.height = '740px';
            imgB.style.marginLeft = '100px'
        } else {
            imgB.style.width = '1229px';
            imgB.style.height = '929px';
            imgB.style.marginLeft = '0'
        }
    }

    function scrollFunction6() {
        let imgA = document.querySelector(".akula__img");
        if (document.body.scrollTop > 19800 || document.documentElement.scrollTop > 18800) {
            imgA.style.width = '1266px';
            imgA.style.height = '537px';
            imgA.style.marginLeft = '100px'
        } else {
            imgA.style.width = '1865px';
            imgA.style.height = '791px';
            imgA.style.marginLeft = '-200px'
        }
    }
}