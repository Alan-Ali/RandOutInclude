

var rent_payment = byId('rent-payment');
service_payment = byId('service-payment'),
    all_payments = byId('all-payments'),
    plus_button = byId('plus-button'),
    date_addition = byId('date-addition');


rent_payment.addEventListener('input', () => {
    if (service_payment.value) {
        all_payments.value = parseInt(rent_payment.value) + parseInt(service_payment.value);
    }
});

service_payment.addEventListener('input', () => {
    if (rent_payment.value) {
        all_payments.value = parseInt(rent_payment.value) + parseInt(service_payment.value);
    }
});



plus_button.addEventListener('click', () => {
    date_addition.insertAdjacentHTML('afterend', `
    <div class="row mx-0 m-0 w-90-per border rounded rounded-3 mt-4 position-relative">
        <div id=""
            class="minus-button btn w-40-px h-40-px bg-light text-danger rounded rounded-5 fa-solid fa-circle-minus text-all-screen-sizes-5 dis-flex-center p-0 m-0 mx-0">

        </div>
        <div class="row p-3 dis-flex-center-start separate">
            <span class="w-20-per dis-flex-center-start  text-all-screen-sizes-7">لە بەرواری</span>
            <input type="date" class="form-control w-80-per p-2 text-all-screen-sizes-7"
                placeholder="ژمارە" name="" value="">
        </div>
        <div class="row p-3 dis-flex-center-start separate">
            <span class="w-20-per dis-flex-center-start  text-all-screen-sizes-7">بۆ بەرواری</span>
            <input type="date" class="form-control w-80-per p-2 text-all-screen-sizes-7"
                placeholder="ژمارە" name="" value="">
        </div>
        <div class="row p-3 dis-flex-center-start separate">
            <span class="w-20-per dis-flex-center-start  text-all-screen-sizes-7">بڕی پارە</span>
            <input type="number" class="form-control w-80-per p-2 text-all-screen-sizes-7"
                placeholder="ژمارە" name="" value="">
        </div>
    </div>`);

    var minus_button = [...byClass('minus-button')];

    minus_button.forEach((val, i) => {
        if (!containsOR(val, 'ran_over')) {
            val.addEventListener('click', () => {
                replaceClasses(val, '', 'ran_over');
                val.parentNode.remove();
            });
        }
    });


});



