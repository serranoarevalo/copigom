using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bear : MonoBehaviour
{

    public float yForce;
    private bool isDead;
    private new Rigidbody2D rigidbody;
    private Animator animator;

    private bool canJump;



    // Start is called before the first frame update
    void Start()
    {
        yForce = 500f;
        isDead = false;
        canJump = true;
        rigidbody = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        animator.speed = 1f + GameController.instance.currentSpeed / 100;
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
