export const setQuestion = (question) => ({type: 'setQuestion', payload: {question: question}});
export const deleteQuestion = () => ({type:'deleteQuestion', payload: {question: null}});