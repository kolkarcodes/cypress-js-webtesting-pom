const productSchema = {


    type: 'object',

    properties: {

        current_page: {
            type: 'number'
        },

        data: {

            type: 'array',

            items: {

                type: 'object',

                properties: {

                    id: {
                        type: 'string'
                    },

                    name: {
                        type: 'string'
                    },

                    price: {
                        type: 'number'
                    }

                },

                required: ['id', 'name', 'price']

            }

        }

    },

    required: ['data']

};

export default productSchema;