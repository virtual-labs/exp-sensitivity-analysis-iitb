// function activity3() {
//     let text = `
//     <div class='divide'>
//     <div style='margin-top: 2vw;'>
//         <br>
//         <div class="fs-16px">
//         <h5>Back Substitution</h5>
//         <p>Learning Objective: To obtain the final solution via back-substitution of the matrix elments with the corresponding vector elements</p>
//         </div>
//         <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
//     </div>
//     </div>
//     `;
//     maindiv.innerHTML += text;
//     setTimeout(() => {MathJax.typeset();}, 300);
// }
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Generated Dataset", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5>X is the last row values of iteration matrix </h5>

        <div style='text-align: center;'>X &nbsp; = &nbsp; ${get_matrix_html(3, 1, [[mat_x1[mat_x1.length - 1][0]], [mat_x1[mat_x1.length - 1][1]], [[mat_x1[mat_x1.length - 1][2]]]], 'inline-block', "20%")}</div>
        <br><br>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='finish_act3();'  id='temp-btn-1234' >Finish</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb3-box');
    //bs_a_c();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
// function bs_a_c() {
//     let c: number[] = [];
//     c.push(mat_c[0][0]);
//     c.push(mat_c[1][0]);
//     c.push(mat_c[2][0]);
//     mat_x = back_sub(mat_a, c);
//     mat_c = [];
//     mat_c.push([c[0]], [c[1]], [c[2]]);
// }
// function verify_matrix_bs() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-1234');
//     let inp_c: HTMLInputElement;
//     console.log(`matrix x =>`, mat_x);
//     //for x
//     for(let i=0; i<3; i++) {
//         inp_c = <HTMLInputElement> document.getElementById(`a1-x-${i+1}1`);
//         if(!verify_values(parseFloat(inp_c.value), mat_x[i])) {
//             alert(`incorrect value in 3 x 1 matrix for X[${i+1}]`);
//             return;
//         }
//     }
//     btn.remove();
//     render_bs_a_c();
//     alert("You have successfully completed this experiment.")
//     maindiv.innerHTML = ``
// ;}
// function render_bs_a_c() {
//     let div: HTMLDivElement = <HTMLDivElement> document.getElementById('ut-inp-div');
//     div.innerHTML = `${get_matrix_html(3, 3, mat_a, 'inline-block', "40%")} &nbsp; <span style='font-size: 30px;'>. X</span>  &nbsp; =  &nbsp; ${get_matrix_html(3, 1, mat_c, 'inline-block', "15%")}`;
// }
function finish_act3() {
    alert('You have completed this experiment successfully.');
    maindiv.innerHTML = `Experiment Completed`;
}
//start_act3();
//# sourceMappingURL=activity3.js.map