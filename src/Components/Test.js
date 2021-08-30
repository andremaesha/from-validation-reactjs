import React from "react";
import { useForm } from "react-hook-form";

const Test = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const firstRules = {
        required: {
            value: true,
            message: "Please Insert Firstname",
        },
        maxLength: {
            value: 10,
            message: "max words is 10",
        },
        minLength: {
            value: 5,
            message: "min words is 5",
        },
    };

    const onSubmit = (data) => {
        console.log(data.firstname);
    };

    const onErrors = (error) => {
        console.log(error);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onErrors)}>
                <input
                    name="firstname"
                    placeholder="firstname"
                    {...register("firstname", firstRules)}
                />

                <button type="submit">Submit</button>
            </form>
            {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
    );
};

export default Test;
