import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Layout from '../../../components/Dashboard/Layout';
import Basket from "../../../components/Dashboard/components/bracket"
import Button from "../../../components/Dashboard/components/Button";
import toast from "react-hot-toast";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { addToBasket } from "../../../redux/slice/Crop/cropSlice";
import * as Yup from 'yup';
import currencyFormatter from '../../../utils/index'


const validationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Category is required'),
  name: Yup.string()
    .required('Crop name is required'),
});
const cropCategories = [
    "Select a category",
    "Vegetables",
    "Fruits",
    "Herbs",
    "Grains",
    "Nuts",
  ];

  const cropNames = {
    Vegetables: [
      { name: "Select a crop", price: null },
      { name: "Tomatoes", price: 2.99 },
      { name: "Carrots", price: 1.99 },
      { name: "Peppers", price: 3.49 },
      { name: "Lettuce", price: 1.79 },
      { name: "Spinach", price: 2.49 },
    ],
    Fruits: [
      { name: "Select a crop", price: null },
      { name: "Apples", price: 1.99 },
      { name: "Bananas", price: 0.79 },
      { name: "Oranges", price: 2.49 },
      { name: "Grapes", price: 3.99 },
      { name: "Strawberries", price: 4.99 },
    ],
    Herbs: [
      { name: "Select a crop", price: null },
      { name: "Basil", price: 2.99 },
      { name: "Parsley", price: 1.49 },
      { name: "Thyme", price: 3.99 },
      { name: "Oregano", price: 2.79 },
      { name: "Rosemary", price: 3.49 },
    ],
    Grains: [
      { name: "Select a crop", price: null },
      { name: "Rice", price: 4.99 },
      { name: "Wheat", price: 3.49 },
      { name: "Barley", price: 2.99 },
      { name: "Oats", price: 1.99 },
      { name: "Corn", price: 3.99 },
    ],
    Nuts: [
      { name: "Select a crop", price: null },
      { name: "Almonds", price: 8.99 },
      { name: "Cashews", price: 9.99 },
      { name: "Pecans", price: 11.99 },
      { name: "Walnuts", price: 7.99 },
    ],
  };
  
  

  const initialValues = {
    category: "",
    name: "",
  };


const  CultivateCrops = ()=>{

    const dispatch = useDispatch();
    const [availableCrops, setAvailableCrops] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedCropPrice, setSelectedCropPrice] = useState(null);


    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setAvailableCrops(cropNames[category] || []);
      };

      const handleCropChange = (event, setFieldValue) => {
        setFieldValue("name", event.target.value);
        setSelectedCropPrice(cropNames[selectedCategory].find(crop => crop.name === event.target.value).price);
      };
      

  
      const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const { category, name } = values;
        const cropName = name;
        const cropCategory = category;
        const cropPrice = selectedCropPrice

      
        setSubmitting(true); // Set isSubmitting to true to show loading indicator
      
        try {
          dispatch(addToBasket({ cropName, cropCategory,cropPrice }));
          toast.success(`${name} added to basket`, { position: "top-center" });
        } catch (error) {
          console.error("Error adding item to basket: ", error);
          toast.error("Failed to add item to basket", { position: "top-center" });
        }
      
        setSubmitting(false); // Set isSubmitting back to false after action is complete
        resetForm();
      };
      
      




return(
  <Layout>
  <div className='w-full h-full flex flex-row items-center justify-center lg:px-32 py-4 gap-5 flex-wrap'>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto max-w-3xl flex justify-center items-center"
    >
    <div className="  flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
       <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm-text-[25px] leading-[38px] text-white">
           Plant a crop today
        </h1>
       </div>

       <Formik
  initialValues={initialValues}
  onSubmit={handleSubmit}
  validationSchema={validationSchema}
>
  {({ values, setFieldValue, isSubmitting, errors, touched }) => (
    <Form className='w-full mt-[65px] flex flex-col gap-[30px]'>
      <div className="flex flex-wrap gap-[20px]">
        <label htmlFor="category">Select a category:</label>
        <select
          id="category"
          name="category"
          onChange={(event) => {
            handleCategoryChange(event);
            setFieldValue("category", event.target.value);
            setFieldValue("name", "");
          }}
          value={selectedCategory}
          className="block w-full max-w-3xl h-10 border-green-500 border-2  rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">

          {cropCategories.map((category,index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && touched.category && (
          <div className="text-red-500">{errors.category}</div>
        )}
      </div>

      <div className="flex flex-wrap gap-[20px]">
        <label htmlFor="name" className=" text-center  text-lg">Select a crop:</label>
        <select
          id="name"
          name="name"
          disabled={!selectedCategory}
          onChange={(event) => handleCropChange(event, setFieldValue)}
          value={values.name}
          className="block w-full max-w-3xl h-10 border-green-500 border-2  rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">

              {availableCrops.map((crop, index) => (
                <option key={index} value={crop.name}>
                  {crop.name}
                </option>
              ))}

        </select>
        {errors.name && touched.name && (
          <div className="text-red-500">{errors.name}</div>
        )}
      </div>

      {/* <div className= "flex flex-wrap flex-row w-full gap-[20px] ">
        <label htmlFor="cropPrice">Amount:</label>
        <Field type="number" name="amount"
          className='py-[15px] sm:px-[25px] outline-none w-full  border-[1px] border-green-500 bg-transparent font-epilogue text-green-500 font-black text-[14px] placeholder:text-green-500 rounded-[10px] sm:min-w-[300px]'/>
        {errors.amount && touched.amount && (
          <div className="text-red-500">{errors.amount}</div>
        )}
      </div> */}

      <div className="flex flex-wrap gap-[20px]">
  <label htmlFor="cropPrice" className="text-center text-lg">Price:</label>
  <div className="block w-full max-w-3xl h-10 bg-white border-green-500 border-2 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">
  {selectedCropPrice ? `$${selectedCropPrice.toFixed(2)}` : ''}
      </div>
</div>



            <div className=" w-full  flex justify-start items-center p-4 bg-green-500 h-[120px] rounded-[10px]">
                   {/* <img src={money} alt='money' className="w-[40px] object-contain"/> */}
                   <h4 className=" font-epilogue  font-bold lg:text-[23px] text-lg text-white ml-[20px]"> you can plant any crop with ease from your dashboard  </h4>
                </div>

             <div className=" flex justify-center items-center mt-[40px]">


                    <Button
                      noIcon
                      loading={isSubmitting}
                      title="Submit your order"
                      width="w-full"
                    //   onClick={createCheckoutSession}
                    disabled={isSubmitting}
                    type={"submit"}
                    
                    />
          </div>
       </Form>
          )}
          </Formik>
    </div>
   </motion.div>
    <Basket/>
   </div>
   </Layout>
)
}
export default CultivateCrops;
