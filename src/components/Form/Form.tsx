import React from "react";
import {ErrorMessage, Field, Formik} from "formik";
import "./Form.css";
import * as Yup from 'yup';
import FormCheckbox from "./Form-Checkbox/Form-Checkbox";
import FormTextArea from "./Form-TextArea/Form-TextArea";
import FormRadio from "./Form-Radio/Form-Radio";
import FormText from "./Form-Text/Form-Text";
import FormNumber from "./Form-Number/Form-Number";
import FormDropDown from "./Form-DropDown/Form-DropDown";

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

                                <FormText label="Name" name="name" placeholder="Enter your Name" id="name"/>
                                <ErrorMessage
                                    name="name"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <div className="Entry-field">

                                <FormText label="Email" name="email" placeholder="Enter your Email" id="email"/>

                                <ErrorMessage
                                    name="email"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <div className="Entry-field">

                                <FormNumber label="Age" name="age" placeholder="Enter your age" id="age"/>
                                <ErrorMessage
                                    name="age"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <div className="Entry-field">
                                <FormDropDown
                                    label="Which option best describes your current role?"
                                    id="role"
                                    name="role"
                                    initialValue="Select current Role"
                                    dropDownList={
                                        ["Student", "Full Time Job", "Full Time Learner", "Prefer not to say", "other",]
                                    }
                                />

                                <ErrorMessage
                                    name="role"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <div className="Entry-field">
                                <label className="heading">Would you recommend freeCodeCamp to a friend?</label>

                                <FormRadio name="recommend" id="definitely" value="Definitely"/>
                                <FormRadio name="recommend" id="maybe" value="Maybe"/>
                                <FormRadio name="recommend" id="not-sure" value="Not Sure"/>

                                <ErrorMessage
                                    name="recommend"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <div className="Entry-field">
                                <FormDropDown
                                    label="What is your favorite feature of freeCodeCamp?"
                                    id="feature"
                                    name="feature"
                                    initialValue="Select current Feature"
                                    dropDownList={
                                        ["Challenges", "Projects", "Community", "Open Source",]
                                    }
                                />
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

                                <FormCheckbox name="improved" id="front-end" value="Front-End Projects"/>
                                <FormCheckbox name="improved" id="back-end" value="Back-End Projects"/>
                                <FormCheckbox name="improved" id="data" value="Data Visualization"/>
                                <FormCheckbox name="improved" id="challenges" value="Challenges"/>
                                <FormCheckbox name="improved" id="open" value="Open Source Community"/>
                                <FormCheckbox name="improved" id="gitter" value="Gitter help rooms"/>
                                <FormCheckbox name="improved" id="videos" value="Videos"/>
                                <FormCheckbox name="improved" id="city" value="City Meetups"/>
                                <FormCheckbox name="improved" id="wiki" value="Wiki"/>
                                <FormCheckbox name="improved" id="forum" value="Forum"/>
                                <FormCheckbox name="improved" id="additional" value="Additional Courses"/>

                                <ErrorMessage
                                    name="improved"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <div className="Entry-field">
                                <FormTextArea
                                    label="Any comments or suggestions?"
                                    name="comments"
                                    id="comments"
                                    placeholder="Enter your comments here..."
                                />
                                <ErrorMessage
                                    name="comments"
                                    render={msg => <div className="Error-message">{msg}</div>}
                                />
                            </div>

                            <button type="submit" disabled={formikProps.isSubmitting} className="btn-submit">Submit
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default Form;