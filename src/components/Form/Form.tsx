import React from "react";
import {Field, Formik} from "formik";
import "./Form.css";

interface Props {
}

const Form: React.FC<Props> = (props: Props) => {
    return (
        <div className="Card">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    age: "",
                    role: "",
                    recommend: "definitely",
                    feature: "",
                    improved: "",
                    comments: "",
                }}
                validate={values => {

                }}
                onSubmit={(values, actions) => {

                }}>
                {formikProps => {
                    return (
                        <form>
                            <div className="Entry-field">
                                <label className="heading" htmlFor="name">Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Enter your Name"
                                    id="name"
                                    className="Input-field"
                                />
                            </div>

                            <div className="Entry-field">
                                <label className="heading" htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    id="email"
                                    className="Input-field"
                                />
                            </div>

                            <div className="Entry-field">
                                <label className="heading" htmlFor="age">Age</label>
                                <Field
                                    type="number"
                                    name="age"
                                    placeholder="Enter your age"
                                    id="age"
                                    className="Input-field"
                                />
                            </div>

                            <div className="Entry-field">
                                <label
                                    className="heading"
                                    htmlFor="role">
                                    Which option best describes your current role?
                                </label>
                                <Field
                                    component="select"
                                    name="role"
                                    id="role"
                                    className="Input-field Dropdown">
                                    <option
                                        disabled
                                        selected
                                        value=""
                                        className="Dropdown-option">
                                        Select current Role
                                    </option>
                                    <option
                                        value="Student"
                                        className="Dropdown-option color-black">
                                        Student
                                    </option>
                                    <option
                                        value="Full Time Job"
                                        className="Dropdown-option color-black">
                                        Full Time Job
                                    </option>
                                    <option
                                        value="Full Time Learner"
                                        className="Dropdown-option color-black">
                                        Full Time Learner
                                    </option>
                                    <option
                                        value="Prefer not to say"
                                        className="Dropdown-option color-black">
                                        Prefer not to say
                                    </option>
                                    <option
                                        value="Other"
                                        className="Dropdown-option color-black">
                                        Other
                                    </option>
                                </Field>
                            </div>

                            <div className="Entry-field">
                                <label className="heading">Would you recommend freeCodeCamp to a friend?</label>

                                <div className={"Radio-container"}>
                                    <Field type="radio" name="recommend" id="definitely" value="Definitely"/>
                                    <label className="radio-option" htmlFor="definitely">Definitely</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="radio" name="recommend" id="maybe" value="Maybe"/>
                                    <label className="radio-option" htmlFor="maybe">Maybe</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="radio" name="recommend" id="not-sure" value="Not Sure"/>
                                    <label className="radio-option" htmlFor="not-sure">Not Sure</label>
                                </div>
                            </div>

                            <div className="Entry-field">
                                <label
                                    className="heading"
                                    htmlFor="feature">
                                    What is your favorite feature of freeCodeCamp?
                                </label>
                                <Field
                                    component="select"
                                    name="feature"
                                    id="feature"
                                    className="Input-field Dropdown">
                                    <option
                                        disabled
                                        selected
                                        value=""
                                        className="Dropdown-option">
                                        Select current Role
                                    </option>
                                    <option
                                        value="Challenges"
                                        className="Dropdown-option color-black">
                                        Challenges
                                    </option>
                                    <option
                                        value="Projects"
                                        className="Dropdown-option color-black">
                                        Projects
                                    </option>
                                    <option
                                        value="Community"
                                        className="Dropdown-option color-black">
                                        Community
                                    </option>
                                    <option
                                        value="Open Source"
                                        className="Dropdown-option color-black">
                                        Open Source
                                    </option>
                                </Field>
                            </div>

                            <div className="Entry-field">
                                <label
                                    className="heading">
                                    What would you like to see improved? (Check all that apply)
                                </label>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="front-end" value="Front-End Projects"/>
                                    <label className="radio-option" htmlFor="front-end">Front-End Projects</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="back-end" value="Back-End Projects"/>
                                    <label className="radio-option" htmlFor="back-end">Back-End Projects</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="data" value="Data Visualization"/>
                                    <label className="radio-option" htmlFor="data">Data Visualization</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="challenges" value="Challenges"/>
                                    <label className="radio-option" htmlFor="challenges">Challenges</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="open" value="Open Source Community"/>
                                    <label className="radio-option" htmlFor="open">Open Source Community</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="gitter" value="Gitter help rooms"/>
                                    <label className="radio-option" htmlFor="gitter">Gitter help rooms</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="videos" value="Videos"/>
                                    <label className="radio-option" htmlFor="videos">Videos</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="city" value="City Meetups"/>
                                    <label className="radio-option" htmlFor="city">City Meetups</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="wiki" value="Wiki"/>
                                    <label className="radio-option" htmlFor="wiki">Wiki</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="forum" value="Forum"/>
                                    <label className="radio-option" htmlFor="forum">Forum</label>
                                </div>

                                <div className={"Radio-container"}>
                                    <Field type="checkbox" name="improved" id="additional" value="Additional Courses"/>
                                    <label className="radio-option" htmlFor="additional">Additional Courses</label>
                                </div>
                            </div>

                            <div className="Entry-field">
                                <label className="heading" htmlFor="comments">Any comments or suggestions?</label>
                                <Field
                                    component="textarea"
                                    name="comments"
                                    rows={5}
                                    cols={40}
                                    placeholder="Enter your comments here..."
                                    id="comments"
                                    className="Input-field Textarea"
                                />
                            </div>

                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Form;