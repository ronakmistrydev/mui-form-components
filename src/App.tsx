import { Box, Button, Container, TextField } from '@mui/material';
import NumberFormat  from 'react-number-format';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

function App() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            phoneNumber: '',
        },
        validationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <Container>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
                />

                <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.errors.password && formik.touched.password ? formik.errors.password : ''}
                />

                <NumberFormat
                    fullWidth
                    label="Phone Number"
                    name="phoneNumber"
                    customInput={TextField}
                    format="(###) ###-####"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.errors.phoneNumber && formik.touched.phoneNumber ? formik.errors.phoneNumber : ''}
                />

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        mt: 3,
                    }}
                >
                    Submit
                </Button>

            </Box>
        </Container>
    );
}

export default App;
