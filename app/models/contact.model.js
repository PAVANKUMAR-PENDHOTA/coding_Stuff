module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 15,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: (props) => `${props.value} is not a valid email address!`,
        },
      },
      mobile: {
        type: Number,
        validate: {
          validator: function (v) {
            return /^[0-9]{10}$/.test(v);
          },
          message: (props) => `${props.value} is not a valid mobile number!`,
        },
      },
      service: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Contact = mongoose.model("contact", schema);
  return Contact;
};

//   ****************
// -- output of 1st code _id is changed and __v also--
// {
//     "title": "Js Tut#",
//     "description": "Description for Tut#",
//     "published": true,
//     "createdAt": "2020-02-02T02:59:31.198Z",
//     "updatedAt": "2020-02-02T02:59:31.198Z",
//     "id": "5e363b135036a835ac1a7da8"
//   }
// =================================================================
// *****************
// module.exports = mongoose => {
//     const Contact = mongoose.model(
//       "contacts",
//       mongoose.Schema(
//         {
//           title: String,
//           description: String,
//           published: Boolean
//         },
//         { timestamps: true }
//       )
//     );

//     return Contact;
//   };

//   ****************
// -- output of 2nd code available  _id and __v also--
// {
//     "_id": "5e363b135036a835ac1a7da8",
//     "title": "Js Tut#",
//     "description": "Description for Tut#",
//     "published": true,
//     "createdAt": "2020-02-02T02:59:31.198Z",
//     "updatedAt": "2020-02-02T02:59:31.198Z",
//     "__v": 0
//   }
