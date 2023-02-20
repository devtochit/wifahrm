const FarmForm = () => {
    return (
      <Formik
        initialValues={{
          amountPlanted: '',
          cropCategory: '',
          cropName: '',
          harvestDate: '',
          plantDate: '',
          price: '',
        }}
        validationSchema={Yup.object({
          amountPlanted: Yup.number()
            .required('Required')
            .min(1, 'Must be at least 1'),
          cropCategory: Yup.string().required('Required'),
          cropName: Yup.string().required('Required'),
          harvestDate: Yup.date().required('Required'),
          plantDate: Yup.date().required('Required'),
          price: Yup.number().required('Required').min(0, 'Must be at least 0'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="amountPlanted">Amount Planted</label>
          <Field type="number" name="amountPlanted" />
          <ErrorMessage name="amountPlanted" />
  
          <label htmlFor="cropCategory">Crop Category</label>
          <Field type="text" name="cropCategory" />
          <ErrorMessage name="cropCategory" />
  
          <label htmlFor="cropName">Crop Name</label>
          <Field type="text" name="cropName" />
          <ErrorMessage name="cropName" />
  
          <label htmlFor="harvestDate">Harvest Date</label>
          <Field type="date" name="harvestDate" />
          <ErrorMessage name="harvestDate" />
  
          <label htmlFor="plantDate">Plant Date</label>
          <Field type="date" name="plantDate" />
          <ErrorMessage name="plantDate" />
  
          <label htmlFor="price">Price</label>
          <Field type="number" name="price" />
          <ErrorMessage name="price" />
  
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };
  