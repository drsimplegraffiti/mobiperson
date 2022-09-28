#### Project setup

Install the following packages

> npm i apollo-server graphql
> npm i -D nodemon

---

#### Graphql Documentation

[Apollo-server](https://www.apollographql.com/docs/apollo-server/getting-started/)

---



### Get all person

```graphql
query {
  persons {
    id
    age
    name
    employed
    gpa
  }
}
```

### Get person by id

```graphql
query {
  person(id: "3bf9e60a-2fd1-4472-b668-0fc9469eed7e") {
    id
    age
    name
    employed
    gpa
  }
}
```

#### Create a new person

```graphql
mutation {
  addPerson(name: "jade sole", age: 32, employed: true) {
    id
    name
  }
}
```

#### Update a new person

```graphql
mutation {
  updatePerson(
    id: "07a8fd28-fce3-4dca-b81a-5d69dda852e5"
    name: "jade updated"
    age: 54
    employed: false
  ) {
    id
    name
  }
}
```

#### Delete a person

```graphql
mutation ($deletePersonId: ID!) {
  deletePerson(id: "f2e65a64-e5ec-47c0-9eb3-a2ef4b7cb509") {
    id
  }
}
```
