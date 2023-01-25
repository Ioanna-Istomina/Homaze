import { useGetContractsQuery } from "redux/API";
import ContractsCard from "./ContractsCard";
import ContractsFilter from "./ContractsFilter";
import { useSelector } from "react-redux";
import { filterContracts } from "redux/selectors";
import BeatLoader from "react-spinners/BeatLoader";


import s from './App.module.css';

export const App = () => {
  const { data, isLoading } = useGetContractsQuery();
  const contracts = useSelector(state => filterContracts(state, data));
 

   return <div className={s.background}>

   {!isLoading&&<div className={s.totalWrap}>
    <h1  className={s.title}>Contracts</h1>
   <div className={s.containerCard}> <ContractsFilter/>
   <div className={s.allCardsContainer}> {data && contracts.map((item, i) => (
      <ContractsCard key={i} item={item}/>
      ))}</div></div>
    </div>}
    {isLoading&&<div className={s.loader}><BeatLoader color="#8f9a98" size={30} /></div>}
    </div>
};
