import axiosInstance from "../api/axiosInstance";
import { useMutation } from "@tanstack/react-query";


// const fetchCards = () => {
//     return axiosInstance.get("/cards")
// }

// const changeCardStatus = async (id: string, formData: { [key: string]: any }) => {
//     return axiosInstance.put(`/cards/${id}/`, formData)
// }

const quotation = async (formData: { [key: string]: any }) => {
    return axiosInstance.post('/quotation/', formData)
}

// export const useCards = () => {
//     return useQuery({
//         queryKey: ['cards'],
//         queryFn: fetchCards,
//         select: (data) => {
//             return data.data
//         }
//     })
// }

// export const useChangeCardStatus = () => {
//     const queryClient = useQueryClient()
//     return useMutation({
//         mutationFn: ({ id, formData }: { id: string, formData: { [key: string]: any } }) => changeCardStatus(id, formData),
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['cards'] })
//         }
//     });
// }


export const useQuotation = () => useMutation({mutationFn: (formData: { [key: string]: any }) => quotation(formData)});
