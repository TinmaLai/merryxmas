function giftFall(x) {
    return 2 * (x - 3) * (x - 3) - 2;
}
var gift = document.getElementById('gift');
var x = 0, y = 0;
var isStopMoving = false;
const movingElement = document.getElementById('gift');
var indexAppear = 0, indexHide = 0;
var stopMoveHeart = false;
document.addEventListener('DOMContentLoaded', function () {
    var container = document.body;
    var isFalling = true;
    var centerX = 0;
    var centerY = 700;
    var radius = 120;
    var speed = 0.002;

    // Set initial position
    function moveElementInCircle() {
        if (isStopMoving) {
            return;
        }
        if (isFalling) {
            var currentTop = parseInt(getComputedStyle(movingElement).top);
            var currentLeft = parseInt(getComputedStyle(movingElement).left);
            if (currentTop < 700) {
                movingElement.style.top = (currentTop + 5) + 'px';
                movingElement.style.left = currentLeft + 'px';
            } else {
                isFalling = false;
            }
        } else {
            var time = new Date().getTime() * speed;
            var posX = centerX + radius * Math.cos(time);
            var posY = centerY + radius * Math.sin(time);
            movingElement.style.left = posX + 'px';
            movingElement.style.top = posY + 'px';
        }

        // Lặp lại hàm sau một khoảng thời gian nhất định (vd: 16ms cho hiệu suất tốt trên các trình duyệt)
        requestAnimationFrame(moveElementInCircle);
    }
    movingElement.addEventListener('click', function () {
        isStopMoving = true;
        var video = document.getElementById('video');
        video.volume = 0.5;
        video.play();
        var appearGiftInterval = setInterval(appearGift, 200);
        setTimeout(() => {
            clearInterval(appearGiftInterval);
            clearInterval(moveHeart);
            var hideGiftInterval = setInterval(hideGift, 200);
            setTimeout(() => {
                clearInterval(hideGiftInterval);
            }, 12400);
        }, 20000);
        var moveHeart = setInterval(moveDiv, 300);
        
        setTimeout(() => {
                // clearInterval(moveHeart);
            var moveHearts = document.getElementsByClassName('move-to-heart');
            for (let i = 0; i < moveHearts.length; i++) {
                moveHearts[i].style.display = 'none';
            }
            movingElement.style.display = 'none';
            typeText(0);
        }, 32800);
    });

    moveElementInCircle();
});

function appearGift() {
    var gifts = document.getElementsByClassName('text-bind');
    if (indexAppear >= 61) {
        // setInterval(hideGift, 800);
    } else {
        gifts[indexAppear++].style.display = 'block';
    }
    // requestAnimationFrame(appearGift);

}
function hideGift() {
    var gifts = document.getElementsByClassName('text-bind');
    if (indexHide <= 61) {
        gifts[indexHide++].style.display = 'none';
    } else {
        stopMoveHeart = true;
    }
    // requestAnimationFrame(appearGift);
}

function moveDiv() {
    var el = document.createElement('div');
    const rect = movingElement.getBoundingClientRect();
    el.style.position = 'absolute';
    el.style.left = rect.left + 'px';
    el.style.top = rect.top + 'px';
    el.style.width = '30px';
    el.style.height = '30px';
    el.style.backgroundImage = "url('img/green-heart-removebg-preview.png')";
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
    el.classList.add('move-to-heart');
    document.body.appendChild(el);

}
function typeText(index) {
    document.body.style.backdropFilter=  "blur(5px)";
    var typedText = document.getElementById("vanvo");

    // Văn bản bạn muốn hiển thị
    var textToType = `Há nhô, vẫn là anh đây :v\n
    Lúc bé đọc được những dòng này, anh mong bé đang ở trong vòng tay anh (theo kế hoạch là như vậy hehe). Sao nhỉ, anh chỉ muốn nói lời cảm ơn thôi, cảm ơn em đã bước đến và vẫn luôn ở đây, cảm ơn em đã rep tin nhắn anh vào hôm đó, cảm ơn vì sự quan tâm ân cần em mang lại, cảm ơn vì những lời nói yêu ta trao nhau vào sáng sớm, cảm ơn những cái ôm, nắm tay, môi hôn thật ngọt ngào từ iêm, cảm ơn vì những niềm vui, và cảm ơn cả những nỗi buồn nữa :v \n
    Có lẽ cách mà anh xuất hiện không được hợp lí như những mối tình của em trước đây, nhưng anh nghĩ mình gặp nhau đã là duyên rồi, ở lại nữa phải là định mệnh. Trước khi gặp em thực sự anh đã nghĩ hạnh phúc đến từ tình yêu có lẽ không thuộc về mình, "trái tim này đã vụn vỡ từ lâu rồi", anh đã giỡn như vậy phải không :v, nhưng em đã đến và thật nhanh cho anh thấy anh cũng có thể được yêu một người nhiều đến vậy. Tuy cũng có nhiều lúc anh vụng về làm em giận, làm em buồn nhưng đừng quên, anh yêu em, cố hoàn thiện nhất để yêu em, trân trọng từng phút ở bên em (trông thế thôi chứ anh cũng có lúc nhạy cảm, đôi khi cũng biết buồn 1 tí :v) \n
    Văn vở cũng mỏi tay ròi, chúc em cùng gia đình giáng sinh hạnh phúc. \n
    Giáng sinh này, có anh, yêu em.`;

    // Gọi hàm để bắt đầu hiệu ứng
    // Kiểm tra xem đã hiển thị hết văn bản chưa
    if (index < textToType.length) {
        if (textToType.charAt(index) === '\n') {
            typedText.innerHTML += ' ';
            typedText.innerHTML += '<br>';
        } else {
            // Nếu không phải dấu cách, thêm ký tự bình thường
            typedText.innerHTML += textToType.charAt(index);
        }
        index++;
        // Gọi lại hàm đệ quy với độ trễ ở đây là 100ms (có thể điều chỉnh)
        setTimeout(function () { typeText(index); }, 30);
    }
}
