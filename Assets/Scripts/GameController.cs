using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public float currentSpeed = 0f;

    public static GameController instance;
    public float initialAcceleration = 0f;
    public float maxAcceleration = 10f;

    public float accelerationTime = 60;

    private float time;
    // Start is called before the first frame update

    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
        else if (instance != this)
        {
            Destroy(gameObject);
        }
    }

    void Start()
    {
        time = 0;
    }

    // Update is called once per frame
    void Update()
    {
        currentSpeed = Mathf.SmoothStep(initialAcceleration, maxAcceleration, time / accelerationTime);
        transform.position -= transform.forward * currentSpeed * Time.deltaTime;
        time += Time.deltaTime;

    }
}
