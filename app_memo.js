const btn = document.getElementById('btn');
console.log(btn);
const color = document.querySelector('.color');
console.dir(color);

//버튼 한 번 클릭했을 때 'button clicked!'
// addEventListener 화살표 함수를 콜백함수로 직접 작성
// btn.addEventListener('이벤트 동작', 콜백 함수);
// btn.addEventListener('click',() => {});

btn.addEventListener('click', () =>{
    // console.log("button clicked!");
   
    const randomRGBArray = getRandomNumber(0,255);
    console.log(randomRGBArray);

    // const r = randomRGBArray[0];
    // const g = randomRGBArray[1];
    // const b = randomRGBArray[2];

    
    //템플릿 리터럴 (backtick`` 변수 바인딩 할 수 있다.)
    const [r,g,b] = randomRGBArray;  //de structure ing 구조분해할당
    // const [r,g,b] = getRandomNumber(0,255); //이렇게 쓸 수도 있다. ↑ //de structure ing 구조분해할당

    //실제 값 바인딩, 매핑
    const rgbColor = `rgba(${r}, ${g}, ${b})`;

    color.textContent = rgbColor; //hard coded
    // console.log(typeof `${r}, ${g}, ${b}`); //타입체크!
    // console.dir(color);
    color.style.color = rgbColor;
    // color.style.color = `rgba(${r}, ${g}, ${b})`;
    document.querySelector('body').style.backgroundColor=rgbColor;
    // document.body.style.backgroundColor=rgbColor;

    //토끼를 그린다.
    // darwRabbit();

    //곰돌이도 그린다.
    // drawBear();

});

function getRandomNumber(min,max) {
    //rgb 랜덤값 추출함수
    let randomRGBArray = [];
    console.log(Array.isArray(randomRGBArray)); //객체가 배열인지 확인하는 함수

    // console.log(Math.random();//랜덤값 확인 - 부동소수점이다.
    for (let i = 0; i < 3; i++){
        const randomNumber = Math.floor((Math.random() * (max-min+1))) + min;
        randomRGBArray.push(randomNumber);
        // console.log(randomNumber); //랜덤숫자 확인용.
    }


    const book = {
        id:1,
        author: '헤밍웨이',
        pub: {
            pubName : '위키북스',
            pubOwner: '위키맨'
        }
    };

    return randomRGBArray;
}