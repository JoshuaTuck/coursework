function pageLoad() {
    $.ajax({
        url: '/thing/list',
        type: 'GET',
        success: thingList => {

            let thingsHTML = `<div class="container">`
                + `<div class="row mb-2">`
                + `<div class="col-2 bg-light font-weight-bold">One</div>`
                + `<div class="col-2 bg-light font-weight-bold">Two</div>`
                + `<div class="col-2 bg-light font-weight-bold">Three</div>`
                + `<div class="col-2 bg-light font-weight-bold">Four</div>`
                + `<div class="col-2 bg-light font-weight-bold">Five</div>`
                + `<div class="col-2 bg-light font-weight-bold">Six</div>`
                + `</div>`;

            for (let thing of thingList) {
                thingsHTML += `<div class="row mb-2">`
                    + `<div class="col-2">${thing.one}</div>`
                    + `<div class="col-2">${thing.two}</div>`
                    + `<div class="col-2">${thing.three}</div>`
                    + `<div class="col-2">${thing.four}</div>`
                    + `<div class="col-2">${thing.five}</div>`
                    + `<div class="col-2">${thing.six}</div>`
                    + `</div>`;
            }
            thingsHTML += `</div>`;

            $('#stuff').html(thingsHTML);
        }

    });

}

}