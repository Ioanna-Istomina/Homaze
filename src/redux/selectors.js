
export const filterSelector = state => state.filter;

export const filterContracts = (state, contracts) => {
  const filter = filterSelector(state);
  if(filter.length<2){
    return contracts;
  }
  const normalizeFilter = filter?.toLowerCase();
  return contracts?.filter(contract =>
    contract?.customerName?.toLowerCase().includes(normalizeFilter)
  );
};
