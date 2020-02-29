import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const _SECRET_KEY__ = 'this@is*belle_portfolio!';
export default {
    Query: {
        getUsers: async (_parent, {}, { models }) => {
            const users = await models.User.find();
            return users;
        },
    },
    Mutation: {
        signup: async (_parent, { uid, password, email, firstname, lastname, }, { models }) => {
            const user = new models.User({ uid, email, firstname, lastname, });
            user._hashed_password = bcrypt.hashSync(password, 12);
            await user.save();

            const newToken = jwt.sign({ userId: user.uid, }, _SECRET_KEY__);
            return { token: newToken, user, };
        },
        signin: async (_parent, { uid, password }, { models }) => {
            let result = {};
            const user = await models.User.findOne({ uid });
            if (user != null) {
                const checkPassword = bcrypt.compareSync(password, user._hashed_password);
                if (checkPassword === true) {
                    const newToken = jwt.sign({ userId: user.uid, }, _SECRET_KEY__);
                    result = { token: newToken, user, };
                }
            }
            
            return result;
        }
    }
};