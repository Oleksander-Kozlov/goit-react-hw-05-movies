import { Formik,  ErrorMessage } from 'formik';
import { Field, Form, BTNSubmit } from './SearchBox.styled';
const initialValues = { query: '' };
 const SearchBox = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    handleSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <Formik initialValues={initialValues}>
      <Form onSubmit={onSubmit} className="form">
        <Field
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
         
          
          placeholder="Search movies"
        />
        <BTNSubmit type="submit" className="button">
          Search video
          {/* <ButtonLabel className="button-label"></ButtonLabel> */}
        </BTNSubmit>

        <ErrorMessage name="searchImg" component="div" />
      </Form>
    </Formik>
  );
};
export default SearchBox;