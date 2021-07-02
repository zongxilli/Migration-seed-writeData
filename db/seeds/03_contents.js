
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('content').del()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        {content: 'Yea Yea Yea', user_id:2, post_id: 1 },
        {content: 'Hu La La', user_id:3, post_id: 2 },
      ]);
    });
};
