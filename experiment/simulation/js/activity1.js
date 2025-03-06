let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">System of Linear Equations: Sensitivity Analysis</h4>

        <div class="fs-16px">
        <p>Learning Objective: To learn how to calculate the p-norm of a vector and a matrix.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Vector", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <div style='text-align: center;'> &nbsp; <span style='font-size: 18px;'>Vector</span>  &nbsp; =  &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, "", 'inline-block', "15%")}</div>
        <br>
        <div id="norm_div" class="row">
            <div class="col-2">1-norm</div>
            <div class="col-2"><input id='normone_inp' class='form-control' /></div>
            <div class="col-2">2-norm</div>
            <div class="col-2"><input id='normtwo_inp' class='form-control' /></div>
            <div class="col-2">Infinity norm</div>
            <div class="col-2"><input id='norminf_inp' class='form-control' /></div>
        </div> <br>
        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='verify_norm();' id='temp-btn-2' >Verify</button>
    </div>
    `;
    console.log("c len ", mat_c.length);
    mat_c = convert_2d_to_1d_vector(mat_c);
    for (let i = 0; i < mat_c.length; i++) {
        one_norm = one_norm + Math.abs(mat_c[i]);
        two_norm_sqr = two_norm_sqr + Math.pow(Math.abs(mat_c[i]), 2);
        two_norm = Math.sqrt(two_norm_sqr);
        temp_c[i] = Math.abs(mat_c[i]);
    }
    inf_norm = Math.max(...temp_c);
    console.log("mat c= ", mat_c);
    console.log("one norm= ", one_norm);
    console.log("second norm: ", two_norm);
    console.log("infinity norm: ", inf_norm);
    mat_c = convert_1d_to_2d_matrix(mat_c);
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    //pivot_a_c();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_norm() {
    let btn = document.getElementById('temp-btn-2');
    let inp_onenorm;
    let inp_twonorm;
    let inp_infnorm;
    inp_onenorm = document.getElementById(`normone_inp`);
    if (!verify_values(parseFloat(inp_onenorm.value), one_norm)) {
        alert(`incorrect value of 1-norm`);
        return;
    }
    inp_twonorm = document.getElementById(`normtwo_inp`);
    if (!verify_values(parseFloat(inp_twonorm.value), two_norm)) {
        alert(`incorrect value of 2-norm`);
        return;
    }
    inp_infnorm = document.getElementById(`norminf_inp`);
    if (!verify_values(parseFloat(inp_infnorm.value), inf_norm)) {
        alert(`incorrect value of infinity-norm`);
        return;
    }
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    render_norm();
    matrix_norm();
}
function render_norm() {
    let div = document.getElementById('norm_div');
    div.innerHTML = `<div class="row">
        <div class="col-2">1-norm</div>
        <div class="col-2">${one_norm}</div>
        <div class="col-2">2-norm</div>
        <div class="col-2">${two_norm}</div>
        <div class="col-2">Infinity norm</div>
        <div class="col-2">${inf_norm}</div>
    </div>`;
}
//for starting first activity
function matrix_norm() {
    // let temp_btn1: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-2');
    // if(temp_btn1) {
    //     temp_btn1.remove();
    // }
    let btn_text1 = get_collapse_btn_text("Matrix", "tb2-box");
    let text1 = `
    ${btn_text1}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <div style='text-align: center;'> &nbsp; <span style='font-size: 18px;'>Matrix</span>  &nbsp; =  &nbsp; ${get_matrix_html_with_title(3, 3, mat_a, "", 'inline-block', "15%")}</div>
        <br>
        <div class="row">
            <div class="col-2">1-norm</div>
            <div class="col-2"><input id='mat_normone_inp' class='form-control' /></div>
            <div class="col-2">Infinity norm</div>
            <div class="col-2"><input id='mat_norminf_inp' class='form-control' /></div>
        </div> <br>
        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='verify_mat_norm();' id='temp-btn-3' >Verify</button>
    </div>
    `;
    console.log("a len ", mat_a.length);
    let col_sum1 = 0;
    let col_sum2 = 0;
    let col_sum3 = 0;
    let row_sum1 = 0;
    let row_sum2 = 0;
    let row_sum3 = 0;
    for (let j = 0; j < mat_a.length; j++) {
        sum_one_norm[j] = 0;
        for (let i = 0; i < mat_a.length; i++) {
            sum_one_norm[j] += Math.abs(mat_a[i][j]);
        }
    }
    mat_one_norm = Math.max(...sum_one_norm);
    console.log("one norm: ", mat_one_norm);
    for (let i = 0; i < mat_a.length; i++) {
        sum_inf_norm[i] = 0;
        for (let j = 0; j < mat_a.length; j++) {
            sum_inf_norm[i] += Math.abs(mat_a[i][j]);
        }
    }
    mat_inf_norm = Math.max(...sum_inf_norm);
    console.log("inf norm: ", mat_inf_norm);
    // for(let j=0;j<mat_a.length;j++)
    // {
    //     //console.log("i= ",i,"j= ",j,"value= ",mat_a[[0);
    //     col_sum1+=mat_a[j][0];
    //     col_sum2+=mat_a[j][1];
    //     col_sum3+=mat_a[j][2];
    // }
    // console.log(col_sum1);
    // console.log(col_sum2);
    // console.log(col_sum3);
    maindiv.innerHTML += text1;
    hide_all_steps();
    show_step('tb2-box');
    //pivot_a_c();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_mat_norm() {
    let btn = document.getElementById('temp-btn-3');
    let inp_mat_onenorm;
    let inp_mat_infnorm;
    inp_mat_onenorm = document.getElementById(`mat_normone_inp`);
    if (!verify_values(parseFloat(inp_mat_onenorm.value), mat_one_norm)) {
        alert(`incorrect value of 1-norm`);
        return;
    }
    inp_mat_infnorm = document.getElementById(`mat_norminf_inp`);
    if (!verify_values(parseFloat(inp_mat_infnorm.value), mat_inf_norm)) {
        alert(`incorrect value of infinity-norm matrix`);
        return;
    }
    btn.remove();
    //render_pivoted_a_c();
    //matrix_norm();
}
activity1();
//# sourceMappingURL=activity1.js.map