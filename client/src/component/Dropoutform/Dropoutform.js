import React, { useState } from 'react'
import './Dropoutform.css';

const Dropoutform = () => {
    const [gender, updateGender] = useState('null');
    const [cast, updateCaste] = useState('null');
    const [disabled, updateDisabled] = useState('null');
    const [att, updateAtt] = useState('null');
    const [marks, updateMarks] = useState([]);
    const [markStore, updatemarksStore] = useState("");
    let array = [];
    console.log(array)
    return (
        <div className="dropout-info">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Gender</label>
                    <input
                        type="email" class="form-control"
                        id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="1 for Male 0 for Female"
                        onChange={(e) => updateGender(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Cast</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="1 For general 0 For cast"
                        onChange={(e) => updateCaste(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">disabled</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="1 For Yes 0 For No"
                        onChange={(e) => updateDisabled(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Attendance</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="Rate out of 3"
                        onChange={(e) => updateAtt(e.target.value)} />
                </div>
                {/*    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Marks1:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="Marks1"
                        onChange={(e) => { return (updatemarksStore(e.target.value), updateMarks.push(markStore)) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Marks2:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="Marks2"
                        onChange={(e) => { return (updatemarksStore(e.target.value), updateMarks.push(markStore)) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Marks3:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="Marks3"
                        onChange={(e) => { return (updatemarksStore(e.target.value), updateMarks.push(markStore)) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Marks4:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="Marks4"
                        onChange={(e) => { return (updatemarksStore(e.target.value), updateMarks.push(markStore)) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Marks5:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="Marks5"
                        onChange={(e) => { return (updatemarksStore(e.target.value), updateMarks.push(markStore)) }}
                    />
                </div> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Dropoutform;
