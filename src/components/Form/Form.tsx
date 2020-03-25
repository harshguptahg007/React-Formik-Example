import React from "react";
import {ErrorMessage, Field, Formik} from "formik";
import "./Form.css";
import * as Yup from 'yup';

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
                validationSchema={
                    Yup.object().shape({
                        name: Yup.string().required('*Field is required'),
                        email: Yup.string().email('Invalid Email').required('*Field is required'),
                        age: Yup.number().required('*Field is required'),
                        role: Yup.string().required('*Field is required'),
                        recommend: Yup.string().required('*Field is required'),
                        feature: Yup.string().required('*Field is required'),
                        improved: Yup.string().required('*Field is required'),
                        comments: Yup.string().required('*Field is required'),
                    })
                }
                validate={values => {

                }}
                onSubmit={(values, actions) => {
                    const data: any = {
                        name: values.name,
                        email: values.email,
                        age: values.age,
                        role: values.role,
                        recommend: values.recommend,
                        feature: values.feature,
                        improved: values.improved,
                        comments: values.comments
                    };

                    console.log(data);
                }}>
                {formikProps => {
                    return (
                        <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset}>
                            <div className="Entry-field">
                                <label className="heading" htmlFor="name">Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Enter your Name"
                                    id="name"
                                    className="Input-field"
                                />
                                <ErrorMessage
                                    name="name"
                                    render={msg => <div className="Error-message">{msg}</div>}
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
                                <ErrorMessage
                                    name="email"
                                    render={msg => <div className="Error-message">{msg}</div>}
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
                                <ErrorMessage
                                    name="age"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                                <ErrorMessage name="age" className="Error-message"/>
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
                                <ErrorMessage
                                    name="role"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
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
                                <ErrorMessage
                                    name="recommend"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
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
                                        value=""
                                        className="Dropdown-option">
                                        Select current Feature
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
                                <ErrorMessage
                                    name="feature"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
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

                                <ErrorMessage
                                    name="improved"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <div className="Entry-field">
                                <label className="heading" htmlFor="comments">Any comments or suggestions?</label>
                                <Field
                                    component="textarea"
                                    name="comments"
                                    rows={6}
                                    cols={74}
                                    placeholder="Enter your comments here..."
                                    id="comments"
                                    className="Textarea"
                                />
                                <ErrorMessage
                                    name="comments"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <button type="submit" disabled={formikProps.isSubmitting} className="btn-submit">Submit</button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Form;