using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bear : MonoBehaviour
{

    public float yForce = 500f;
    private bool isDead = false;
    private new Rigidbody2D rigidbody;
    private Animator animator;

    private bool canJump = true;

    // Start is called before the first frame update
    void Start()
    {
        rigidbody = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {

        if (isDead == false && canJump == true)
        {
            if (Input.GetMouseButtonDown(0))
            {
                animator.SetTrigger("Jump");
                rigidbody.velocity = Vector2.zero;
                rigidbody.AddForce(new Vector2(0, yForce));
                canJump = false;

            }
        }

    }
    void OnCollisionEnter2D(Collision2D collision)
    {


        if (collision.collider.tag == "ground")
        {
            canJump = true;
        }
    }
}
