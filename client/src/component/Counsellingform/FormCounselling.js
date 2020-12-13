import Axios from 'axios';
import React, { useState } from 'react'
import './FormCounselling.css'
export const Form = () => {
    const [sslc, updatesslc] = useState('');
    const [hsc, updatehsc] = useState('');
    const [cgpa, updatecgpa] = useState('');
    const [school_type, updateschool_type] = useState('');
    const [no_of_minprojects, updateno_of_miniprojects] = useState('');
    const [no_of_projects, updateno_of_projects] = useState('');
    const [coresub_skill, updatecoresub_skill] = useState('');
    const [aptitude_skill, updateaptitude_skill] = useState('');
    const [problemsolving_skill, updateproblemsolving_skill] = useState('');
    const [programming_skill, updateprogramming_skill] = useState('');
    const [abstractthink_skill, updateabstractthink_skill] = useState('');
    const [design_skill, updatedesign_skill] = useState('');
    const [first_computer, updatefirst_computer] = useState('');
    const [first_program, updatefirst_program] = useState('');
    const [lab_programs, updatelab_programs] = useState('');
    const [ds_coding, updateds_coding] = useState('');
    const [technology_used, updatetechnology_used] = useState('');
    const [sympos_attend, updatesympos_attend] = useState('');
    const [sympos_won, updatesympos_won] = useState('');
    const [extracurricular, updateextracurricular] = useState('');
    const [learning_style, updatelearning_style] = useState('');
    const [college_bench, updatecollege_bench] = useState('');
    const [clg_teachers_know, updateclg_teachers_know] = useState('');
    const [college_performance, updatecollege_perfomance] = useState('');
    const [college_skills, updatecollege_skills] = useState('');
    const [career, updateCareer] = useState("none");
    const counselling = async (e) => {
        e.preventDefault()
        await Axios.post('https://push-that-code.herokuapp.com/counsel', {
            "sslc": sslc,
            "hsc": hsc,
            "cgpa": cgpa,
            "school_type": school_type,
            "no_of_miniprojects": no_of_minprojects,
            "no_of_projects": no_of_projects,
            "coresub_skill": coresub_skill,
            "aptitude_skill": aptitude_skill,
            "problemsolving_skill": problemsolving_skill,
            "programming_skill": programming_skill,
            "abstractthink_skill": abstractthink_skill,
            "design_skill": design_skill,
            "first_computer": first_computer,
            "first_program": first_program,
            "lab_programs": lab_programs,
            "ds_coding": ds_coding,
            "technology_used": technology_used,
            "sympos_attend": sympos_attend,
            "sympos_won": sympos_won,
            "extracurricular": extracurricular,
            "learning_style": learning_style,
            "college_bench": college_bench,
            "clg_teachers_know": clg_teachers_know,
            "college_performence": college_performance,
            "college_skills": college_skills
        })
            .then(res => updateCareer(res.data.role))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h1 className="header1">CAREER PREDICTOR</h1>
            <div className="counselling-info">
                <form className="info" onSubmit={counselling}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">10th  Grade:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="out of 10"
                            onChange={(e) => updatesslc(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">12th Grade:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder="out of 10"
                            onChange={(e) => updatehsc(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">CGPA:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder="out of 10"
                            onChange={(e) => updatecgpa(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">School Type</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder="0 for central board 1 for state"
                            onChange={(e) => updateschool_type(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Projects:mini</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder="mini Projects"
                            onChange={(e) => updateno_of_miniprojects(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Projects</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Projects"
                            onChange={(e) => updateno_of_projects(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Core Subject:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 10"
                            onChange={(e) => updatecoresub_skill(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">aptitude_skill:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 10"
                            onChange={(e) => updateaptitude_skill(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">problemsolving_skill:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 10"
                            onChange={(e) => updateproblemsolving_skill(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">programming skill:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 10"
                            onChange={(e) => updateprogramming_skill(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Abstract skill:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 10"
                            onChange={(e) => updateabstractthink_skill(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">design skill:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 10"
                            onChange={(e) => updatedesign_skill(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">first program:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 10"
                            onChange={(e) => updatefirst_program(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Lab Progress:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate completion out of 100"
                            onChange={(e) => updatelab_programs(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">DSA:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updateds_coding(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">technology awareness</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updatetechnology_used(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">seminar awarness:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updatesympos_attend(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">won at seminar:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updatesympos_won(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">extracurricular:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updateextracurricular(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Learning capabilites:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updatelearning_style(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">type of Bencher:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updatecollege_bench(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Teacher reach:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updateclg_teachers_know(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">College Perfomance:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updatecollege_perfomance(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">College skills:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder=" Rate skill out of 100"
                            onChange={(e) => updatecollege_skills(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">first computer:</label>
                        <input
                            type="text" className="form-control"
                            id="exampleInputPassword1"
                            placeholder="1 for old 2 for new"
                            onChange={(e) => updatefirst_computer(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
            <div className="role">
                <h2 class="header">ROLE:</h2>
                <p className="role-output">{career}</p>
                <a className="btn btn-danger" href="/StudentDashboard">BACK</a>
            </div>
        </div>
    )
}
export default Form
