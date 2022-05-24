import {
    Autocomplete,
    Box,
    Button,
    Container,
    TextField
} from '@mui/material';
import { useFormik } from 'formik';
import NumberFormat  from 'react-number-format';
import * as yup from 'yup';
import { phoneNumberPrefixByCountry } from './components/country-code';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    ipAddress: yup.string().required('IP address is required'),
    postalCode: yup.number().min(5).max(5).required('Postal code is required'),
});

function App() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            phoneNumber: '',
            ipAddress: '',
            postalCode: '',
            country: '',
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
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    my: 8,
                }}
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
                    label="Postal Code"
                    name="postalCode"
                    customInput={TextField}
                    format="#####"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postalCode}
                    error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                    helperText={formik.errors.postalCode && formik.touched.postalCode ? formik.errors.postalCode : ''}
                />

                <Autocomplete
                    options={phoneNumberPrefixByCountry}
                    autoHighlight
                    getOptionLabel={(option) => `${option.label} +${option.phone}`}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt={`${option.label} flag`}
                            />
                            {option.label} ({option.code}) +{option.phone}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a Country"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                            }}
                        />
                    )}
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

                <NumberFormat
                    fullWidth
                    label="IP Address"
                    name="ipAddress"
                    customInput={TextField}
                    format="###.###.###.###"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ipAddress}
                    error={formik.touched.ipAddress && Boolean(formik.errors.ipAddress)}
                    helperText={formik.errors.ipAddress && formik.touched.ipAddress ? formik.errors.ipAddress : ''}
                />

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Submit
                </Button>

            </Box>
        </Container>
    );
}

export default App;
