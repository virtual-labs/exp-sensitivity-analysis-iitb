function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Performing Jacobi iterations</h5>
        <p>Learning Objective: To learn how to perform Jacobi iterations</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    ut_a_c();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_x1_inputs = get_matrix_html_with_title(3, 3, [
        [
            `<input id='a1-uta-11' class='form-control' />`,
            `<input id='a1-uta-12' class='form-control' />`,
            `<input id='a1-uta-13' class='form-control' />`,
        ],
        [
            `<input id='a1-uta-21' class='form-control' />`,
            `<input id='a1-uta-22' class='form-control' />`,
            `<input id='a1-uta-23' class='form-control' />`,
        ],
        [
            ":",
            ":",
            ":",
        ],
    ], "<div class='row'><div class='col-4'>X1</div><div class='col-4'>X2</div><div class='col-4'>X2</div></div>", 'inline-block', "60%");
    let btn_text = get_collapse_btn_text("Iterations", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 3, mat_a, "A", 'inline-block', "40%")} &nbsp; <span style='font-size: 30px;'>* X</span>  &nbsp; =  &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, "C", 'inline-block', "15%")}</div>
        <br>

        <h5>Take the tolerance as 10-6. Start with initial guess solution [0 0 0]T. Perform Jacobi iterations</h5>

        <div id='ut-inp-div' style='text-align: center;'>${matrix_x1_inputs} &nbsp;</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_ut();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb2-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function ut_a_c() {
    let c = [];
    c.push(mat_c[0][0]);
    c.push(mat_c[1][0]);
    c.push(mat_c[2][0]);
    mat_x1 = iterate(mat_a, c);
    mat_c = [];
    mat_c.push([c[0]], [c[1]], [c[2]]);
}
function verify_matrix_ut() {
    let btn = document.getElementById('temp-btn-123');
    let inp_a;
    let inp_c;
    console.log(`matrix x1 =>`, mat_x1);
    //for a
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = document.getElementById(`a1-uta-${i + 1}${j + 1}`);
            if (!verify_values_abs(parseFloat(inp_a.value), mat_x1[i][j])) {
                alert(`incorrect value in 3 x 3 matrix for a[${i + 1}][${j + 1}]`);
                return;
            }
        }
    }
    btn.remove();
    render_ut_a_c();
    start_act3();
}
function render_ut_a_c() {
    let div = document.getElementById('ut-inp-div');
    div.innerHTML = `iteration matrix = ${get_matrix_html_with_title(10, 3, mat_x1, "<div class='row'><div class='col-4'>X1</div><div class='col-4'>X2</div><div class='col-4'>X2</div></div>", 'inline-block', "40%")}`;
}
//activity2();
//# sourceMappingURL=activity2.js.map