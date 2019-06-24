import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    handleShowCourse = (id, title) => {
        this.props.history.push(`/courses/${id}/${title}`);
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="courses">
                    {
                        this.state.courses.map(course => {
                            return <article 
                                        className="course" 
                                        key={course.id}
                                        onClick={() => this.handleShowCourse(course.id, course.title)}
                                    >
                                        {course.title}
                                    </article>;
                        } )
                    }
                </section>
                <section>
                    <Route path={`${this.props.match.url}/:id/:title`} component={Course} />
                </section>
            </div>
        );
    }
}

export default Courses;