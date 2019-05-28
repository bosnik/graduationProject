import modalCalc, {
    data_calc
} from './modalCalc';

function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Отправленно',
        failure: 'Ошибка отправки!'
    };

    let form = document.querySelectorAll(".form"),
        input = document.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    function sendForm(elem) {
        elem.addEventListener("submit", function (e) {
            e.preventDefault();

            elem.appendChild(statusMessage);

            let formData = new FormData(elem);
            if (data_calc) {
                for (let key in data_calc) {
                    formData.append(key, data_calc[key]);
                }
            }

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open("POST", "server.php");

                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    let obj = {}; // 
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });

                    let json = JSON.stringify(obj);

                    request.send(json);

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 3) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };

                });
            }

            function clearInputs() {
                [...input].forEach(elem => (elem.value = ""));
            }

            function clerObj(data_calc) {
                data_calc = {};
                return data_calc;
            }
            postData(formData)
                .then(() => (statusMessage.innerHTML = message.loading))
                .then(() => (statusMessage.innerHTML = message.success))
                .catch(() => (statusMessage.innerHTML = message.failure))
                .then(clearInputs)
                .then(clerObj(data_calc));
        });
    }

    [...form].forEach(function (element) {
        sendForm(element);
    });
}

export default form;