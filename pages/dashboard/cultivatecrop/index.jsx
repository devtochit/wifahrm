import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Layout from '../../../components/Dashboard/Layout';
import Basket from "../../../components/Dashboard/components/bracket"
import toast from "react-hot-toast";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { addToBasket } from "../../../redux/slice/Crop/cropSlice";

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
      "Select a crop",
      "Tomatoes",
      "Carrots",
      "Peppers",
      "Lettuce",
      "Spinach",
    ],
    Fruits: [
      "Select a crop",
      "Apples",
      "Bananas",
      "Oranges",
      "Grapes",
      "Strawberries",
    ],
    Herbs: [
      "Select a crop",
      "Basil",
      "Parsley",
      "Thyme",
      "Oregano",
      "Rosemary",
    ],
    Grains: [
      "Select a crop",
      "Rice",
      "Wheat",
      "Barley",
      "Oats",
      "Corn",
    ],
    Nuts: ["Select a crop", "Almonds", "Cashews", "Pecans", "Walnuts"],
  };
  
  const initialValues = {
    category: "",
    name: "",
    amount: 0,
  };


const  CultivateCrops = ()=>{

    const dispatch = useDispatch();
    const [availableCrops, setAvailableCrops] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
   
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setAvailableCrops(cropNames[category] || []);
      };
    
      const handleCropChange = (event, setFieldValue) => {
        setFieldValue("name", event.target.value);
      };
    
    
        const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      dispatch(addToBasket(values));
      toast.success(`${values.name} added to basket`, { position: "top-center", });
            console.log(values)
            setSubmitting(false);
            resetForm()
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
       
       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue, isSubmitting }) => (
       <Form  className=' w-full mt-[65px] flex flex-col gap-[30px]'>
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
                
                {cropCategories.map((category) => (
                    <option key={category} value={category}>
                    {category}
                    </option>
                ))}
                </select>
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

                {availableCrops.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>

              <div className= " flex flex-wrap flex-row w-full  gap-[20px] ">
              <label htmlFor="amount">Amount:</label>
              <Field type="number" name="amount" 
              className=' py-[15px] sm:px-[25px] outline-none w-full  border-[1px] border-green-500 bg-transparent font-epilogue text-green-500 font-black text-[14px] placeholder:text-green-500 rounded-[10px] sm:min-w-[300px] '/>
              <ErrorMessage name="amount" component="div" />
            </div>

            <div className=" w-full  flex justify-start items-center p-4 bg-green-500 h-[120px] rounded-[10px]">
                   {/* <img src={money} alt='money' className="w-[40px] object-contain"/> */}
                   <h4 className=" font-epilogue  font-bold lg:text-[23px] text-lg text-white ml-[20px]"> you can plant any crop with ease from your dashboard  </h4>
                </div>
            </div>
             <div className=" flex justify-center items-center mt-[40px]">
             <button 
             className=" w-72 gap-10  text-xl flex justify-center items-center text-white font-extrabold h-20 bg-green-500 rounded-[10px] "
             type="submit" 
             disabled={isSubmitting}>
               Submit
               <ShoppingCartIcon className="h-8 w-8 text-white" />
             </button>

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