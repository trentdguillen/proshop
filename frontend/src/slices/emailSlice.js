import { EMAIL_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const emailApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendEmail: builder.mutation({
            query: (data) => ({
                url: `${EMAIL_URL}/send-email`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useSendEmailMutation } = emailApiSlice;
