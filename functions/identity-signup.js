const axios = require('axios')
const { HASURA_ADMIN_SECRET } = process.env

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 410,
      body: 'Unsupported Request Method'
    })
  }

  const { user } = JSON.parse(event.body)

  const responseBody = {
    query: `
        mutation insertUser ($id: String, $email: String){
          insert_user(objects: {id: $id, email: $email}){
            affected_rows
          }
        }
      `,
    variables: {
      id: user.id,
      email: user.email
    }
  }

  try {
    const result = await axios.post(
      'https://noble-goose-83.hasura.app/v1/graphql',
      responseBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': HASURA_ADMIN_SECRET
        }
      }
    )
  } catch (e) {
    console.log(e)

    return {
      statusCode: 500,
      body: 'something is wrong'
    }
  }

  return {
    statusCode: 200,
    body: '{}'
  }
}
